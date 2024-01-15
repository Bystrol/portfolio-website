type EmailTemplateProps = {
  email: string
  message: string
}

export default function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <div>
      <p>Email: {email}</p>
      <p>Wiadomość: {message}</p>
    </div>
  )
}
