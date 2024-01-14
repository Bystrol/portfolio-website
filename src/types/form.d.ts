export type ContactFormData = {
  [key: string]: string | Record
  name: string
  email: string
  message: string
  isInvalid: {
    name: boolean
    email: boolean
    message: boolean
  }
  inputTouched: {
    [key: string]: boolean
    name: boolean
    email: boolean
    message: boolean
  }
}

export type UpdatedInvalid = {
  [key: string]: boolean
  name: boolean
  email: boolean
  message: boolean
}
