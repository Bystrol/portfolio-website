'use server'

import EmailTemplate from '@/components/molecules/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(
  name: string,
  email: string,
  message: string
) {
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
