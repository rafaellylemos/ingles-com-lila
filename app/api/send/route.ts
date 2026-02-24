import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const isEbook = subject?.toLowerCase().includes('e-book') || subject?.toLowerCase().includes('guia');

    const data = await resend.emails.send({
      from: 'Site Teacher Lila <onboarding@resend.dev>',
      to: ['rafaellyltbmarques@gmail.com'],
      subject: isEbook ? `🔥 NOVO LEAD: ${name} baixou o E-book` : `📩 CONTATO: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1B263B; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: ${isEbook ? '#D4AF37' : '#002147'}; text-transform: uppercase;">
            ${isEbook ? '✈️ Novo Check-in de E-book' : '📩 Nova Mensagem de Contato'}
          </h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          ${!isEbook ? `<p><strong>Assunto:</strong> ${subject}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>${isEbook ? 'Status:' : 'Mensagem:'}</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${isEbook ? `O aluno ${name} acabou de liberar o acesso ao guia de sobrevivência pela página de E-book.` : message}
          </p>
          <footer style="margin-top: 20px; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 1px;">
            Sistema Lila | ${new Date().toLocaleDateString('pt-BR')}
          </footer>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}