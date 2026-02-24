import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, cpf, endereco, localizacao, plano, teacher } = body;

    const data = await resend.emails.send({
      from: 'Matrícula Lila <onboarding@resend.dev>',
      to: ['rafaellyltbmarques@gmail.com'],
      subject: `💰 NOVO CONTRATO: ${nome}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; rounded: 20px;">
          <h2 style="color: #002147; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">🚀 Nova Matrícula Realizada!</h2>
          
          <p><strong>Plano Escolhido:</strong> <span style="font-size: 1.2em; color: #D4AF37;">${plano}</span></p>
          <p><strong>Teacher Selecionada:</strong> ${teacher || 'Lila (Direto)'}</p>
          
          <div style="bg-color: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Dados do Aluno:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Localização:</strong> ${localizacao}</p>
          </div>
          
          <p style="font-size: 10px; color: #999; margin-top: 30px;">Este é um e-mail automático gerado pelo formulário de fechamento.</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}