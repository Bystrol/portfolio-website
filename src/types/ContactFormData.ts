export interface ContactFormData {
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

export interface UpdatedInvalid {
  name: boolean
  email: boolean
  message: boolean
}
