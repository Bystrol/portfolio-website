import EmailTemplate from '@/components/molecules/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message)
    return Response.json({ message: 'Missing fields', status: 400 })

  try {
    const data = await resend.emails.send({
      from: 'Kontakt <kontakt@michalbystryk.dev>',
      to: ['michalbystryk@gmail.com'],
      subject: `Kontakt poprzez stronę wizytówkę od ${name}`,
      react: EmailTemplate({ email, message })
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
