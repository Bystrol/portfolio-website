import { useState } from 'react'
import { sectionIds } from '@/utils/data/sectionIds'
import { Unbounded } from 'next/font/google'
import Link from 'next/link'
import { Translation } from '@/types/translation'
import { githubLink, linkedinLink } from '@/utils/constants/socialMediaLinks'
import ArrowTopRight from '../atoms/ArrowTopRight'
import useContactForm from '@/hooks/useContactForm'
import FormInput from '../molecules/FormInput'
import { validateInput } from '@/utils/functions/validateInput'
import toast from 'react-hot-toast'
import { UpdatedInvalid } from '@/types/form'

const unbounded = Unbounded({
  subsets: ['latin']
})

type ContactSectionProps = {
  translation: Translation
}

const socialMedia = [
  {
    text: 'Github',
    link: githubLink
  },
  {
    text: 'LinkedIn',
    link: linkedinLink
  }
]

export default function ContactSection({ translation }: ContactSectionProps) {
  const [animateErrorMessage, setAnimateErrorMessage] = useState(false)
  const {
    initialContactFormData,
    contactFormData,
    setContactFormData,
    contactFormInputsData,
    isFormValid
  } = useContactForm()

  const submitForm = () => {
    if (isFormValid) {
      const { name, email, message } = contactFormData
      fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })
      setContactFormData(initialContactFormData)
      toast.success(
        contactFormData.name + ', ' + translation.contact.successMessage
      )
    } else {
      setContactFormData((prevContactFormData) => {
        const updatedInvalid: UpdatedInvalid = {
          name: prevContactFormData.isInvalid.name,
          email: prevContactFormData.isInvalid.email,
          message: prevContactFormData.isInvalid.message
        }

        for (let key in updatedInvalid) {
          updatedInvalid[key] = !validateInput(key, contactFormData[key])
        }

        return {
          ...prevContactFormData,
          isInvalid: updatedInvalid,
          inputTouched: {
            name: true,
            email: true,
            message: true
          }
        }
      })

      setAnimateErrorMessage(true)

      setTimeout(() => {
        setAnimateErrorMessage(false)
      }, 500)
    }
  }

  return (
    <section
      id={sectionIds[4]}
      className="w-full sm:h-screen flex justify-center items-center px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] sm:py-0"
    >
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-[40px] sm:gap-0 pr-[4.6vw] sm:pr-0 max-w-[1440px]">
        <div className="sm:w-2/5">
          <h2
            className={`${unbounded.className} text-[24px] sm:text-[28px] lg:text-[42px] uppercase pb-[20px]`}
          >
            {translation.contact.heading}
          </h2>
          <p className="text-[14px] lg:text-[18px] pb-[45px] lg:pb-[65px]">
            {translation.contact.paragraph}
          </p>
          <div className="flex gap-[12px] lg:gap-[15px]">
            {socialMedia.map((social, index) => {
              return (
                <Link
                  key={index}
                  href={social.link}
                  className="flex items-center gap-[6px] text-[18px] sm:text-[22px] lg:text-[24px] hover:underline"
                >
                  {social.text}
                  <ArrowTopRight />
                </Link>
              )
            })}
          </div>
          <p className="text-[18px] sm:text-[22px] lg:text-[24px] pt-[12px]">
            michalbystryk@gmail.com
          </p>
          <p className="text-[18px] sm:text-[22px] lg:text-[24px] pt-[12px]">
            +48 518 432 557
          </p>
        </div>
        <form
          className="flex flex-col gap-[10px] sm:gap-[15px] sm:w-1/2"
          action={submitForm}
        >
          {contactFormInputsData.map((input, index) => {
            return (
              <FormInput
                key={index}
                tag={input.tag}
                id={input.id}
                translation={translation}
                value={input.value}
                isInvalid={input.isInvalid}
                onChange={input.onChange}
                onBlur={input.onBlur}
                index={index}
                animateErrorMessage={animateErrorMessage}
              />
            )
          })}
          <button className="w-max px-[40px] py-[6px] sm:px-[60px] sm:py-[8px] rounded-full border border-[#2960F8] bg-gradient-to-r from-[#5035DA] to-[#2960F8] sm:hover:drop-shadow-blue text-[12px] sm:text-[16px] transition-all duration-200">
            {translation.contact.button}
          </button>
        </form>
      </div>
    </section>
  )
}
