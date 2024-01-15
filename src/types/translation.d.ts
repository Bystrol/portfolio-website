export type Translation = {
  navigation: string[]
  hero: {
    heading: string
    paragraph: string
    button: string
    availability_first: string
    availability_second: string
  }
  about: {
    heading_first: string
    paragraph_first: string
    paragraph_second: string
    heading_second: string
  }
  offer: {
    heading: string
    paragraph: string
    cards: { title: string; content: string }[]
  }
  projects: {
    heading: string
    cards: { title: string; content: string }[]
    button: string
  }
  contact: {
    heading: string
    paragraph: string
    form: { label: string; placeholder: string; errorMessage: string }[]
    button: string
    successMessage: string
  }
  footer: {
    paragraph: string
  }
}
