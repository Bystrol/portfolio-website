import { useState } from 'react'
import { ContactFormData } from '@/types/ContactFormData'
import { handleInputEvent } from '@/utils/handleInputEvent'
import { ChangeEventHandler } from 'react'
import { useI18n } from '@/locales/client'

type ContactFormInputs = {
  tag: 'input' | 'textarea'
  id: 'name' | 'email' | 'message'
  value: string
  label: string
  errorMessage: string
  isInvalid: boolean
  onChange:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  onBlur:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
}

const initialContactFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
  isInvalid: {
    name: false,
    email: false,
    message: false
  },
  inputTouched: {
    name: false,
    email: false,
    message: false
  }
}

export default function useContactForm() {
  const t = useI18n()
  const [contactFormData, setContactFormData] = useState<ContactFormData>(
    initialContactFormData
  )

  const contactFormInputsData: ContactFormInputs[] = [
    {
      tag: 'input',
      id: 'name',
      value: contactFormData.name,
      label: t('common.contact.form.name.label'),
      errorMessage: t('common.contact.form.name.errorMessage'),
      isInvalid: contactFormData.isInvalid.name,
      onChange: (e) => handleInputEvent(e, setContactFormData),
      onBlur: (e) => handleInputEvent(e, setContactFormData)
    },
    {
      tag: 'input',
      id: 'email',
      value: contactFormData.email,
      label: t('common.contact.form.email.label'),
      errorMessage: t('common.contact.form.email.errorMessage'),
      isInvalid: contactFormData.isInvalid.email,
      onChange: (e) => handleInputEvent(e, setContactFormData),
      onBlur: (e) => handleInputEvent(e, setContactFormData)
    },
    {
      tag: 'textarea',
      id: 'message',
      value: contactFormData.message,
      label: t('common.contact.form.message.label'),
      errorMessage: t('common.contact.form.message.errorMessage'),
      isInvalid: contactFormData.isInvalid.message,
      onChange: (e) => handleInputEvent(e, setContactFormData),
      onBlur: (e) => handleInputEvent(e, setContactFormData)
    }
  ]

  const isFormValid =
    contactFormData.inputTouched.name &&
    !contactFormData.isInvalid.name &&
    contactFormData.inputTouched.email &&
    !contactFormData.isInvalid.email &&
    contactFormData.inputTouched.message &&
    !contactFormData.isInvalid.message

  return {
    initialContactFormData,
    contactFormData,
    setContactFormData,
    contactFormInputsData,
    isFormValid
  }
}
