import { ContactFormData } from '@/types/ContactFormData'
import { validateInput } from './validateInput'
import { UpdatedInvalid } from '@/types/ContactFormData'

export const handleInputEvent = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>
) => {
  const { id, value } = event.target

  setFormData((prevFormData) => {
    const updatedInvalid: UpdatedInvalid = {
      name: prevFormData.isInvalid.name,
      email: prevFormData.isInvalid.email,
      message: prevFormData.isInvalid.message
    }

    if (event.type === 'change') {
      updatedInvalid[id as keyof UpdatedInvalid] =
        !validateInput(id, value) && prevFormData.inputTouched[id]
    } else if (event.type === 'blur') {
      updatedInvalid[id as keyof UpdatedInvalid] = !validateInput(id, value)
    }

    return {
      ...prevFormData,
      [id]: value,
      inputTouched: {
        ...prevFormData.inputTouched,
        [id]: event.type === 'blur' ? true : prevFormData.inputTouched[id]
      },
      isInvalid: updatedInvalid
    }
  })
}
