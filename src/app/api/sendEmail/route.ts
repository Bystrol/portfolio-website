import EmailTemplate from '@/components/molecules/EmailTemplate'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  console.log('test')
  if (!name || !email || !message)
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })

  try {
    const data = await resend.emails.send({
      from: 'Kontakt <kontakt@michalbystryk.dev>',
      to: ['michalbystryk@gmail.com'],
      subject: `Kontakt poprzez stronę wizytówkę od ${name}`,
      react: EmailTemplate({ email, message })
    })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
