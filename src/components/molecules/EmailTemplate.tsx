type Props = {
  email: string
  message: string
}

export default function EmailTemplate({ email, message }: Props) {
  return (
    <div>
      <p>Email: {email}</p>
      <p>Wiadomość: {message}</p>
    </div>
  )
}
