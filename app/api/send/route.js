import { EmailTemplate } from '../../../components/EmailSection';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'faeze <modadesfaeze@gmail.com>',
      to: ['modadesfaeze@gmail.com'],
      subject: 'Hello world',
      react: <>
      <p>
        
      </p>
      </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
