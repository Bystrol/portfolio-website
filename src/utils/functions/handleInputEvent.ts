import { ContactFormData } from '@/types/form'
import { validateInput } from './validateInput'
import { UpdatedInvalid } from '@/types/form'

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
      updatedInvalid[id] =
        !validateInput(id, value) && prevFormData.inputTouched[id]
    } else if (event.type === 'blur') {
      updatedInvalid[id] = !validateInput(id, value)
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
