import { useState } from 'react'
import { ContactFormData } from '@/types/form'
import { handleInputEvent } from '@/utils/functions/handleInputEvent'
import { ChangeEventHandler } from 'react'

type ContactFormInputs = {
  tag: 'input' | 'textarea'
  id: 'name' | 'email' | 'message'
  isInvalid: boolean
  onChange:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  onBlur:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  value: string
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
  const [contactFormData, setContactFormData] = useState<ContactFormData>(
    initialContactFormData
  )

  const contactFormInputsData: ContactFormInputs[] = [
    {
      tag: 'input',
      id: 'name',
      isInvalid: contactFormData.isInvalid.name,
      onChange: (e) => handleInputEvent(e, setContactFormData),
      onBlur: (e) => handleInputEvent(e, setContactFormData),
      value: contactFormData.name
    },
    {
      tag: 'input',
      id: 'email',
      isInvalid: contactFormData.isInvalid.email,
      onChange: (e) => handleInputEvent(e, setContactFormData),
      onBlur: (e) => handleInputEvent(e, setContactFormData),
      value: contactFormData.email
    },
    {
      tag: 'textarea',
      id: 'message',
      isInvalid: contactFormData.isInvalid.message,
      onChange: (e) => handleInputEvent(e, setContactFormData),
      onBlur: (e) => handleInputEvent(e, setContactFormData),
      value: contactFormData.message
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
