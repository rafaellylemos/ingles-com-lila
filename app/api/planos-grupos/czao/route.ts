import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, whatsapp, plano, localizacao, email } = body;

    if (!nome || !email || !whatsapp) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    console.log(`[LOG] Processando Lista de Espera: CZÃO (C1/C2) | Aluno: ${nome}`);

    const { data, error } = await resend.emails.send({
      from: 'Lista de Espera Lila <onboarding@resend.dev>',
      to: ['rafaellyltbmarques@gmail.com'],
      subject: `✨ [LISTA ESPERA] CZÃO (C1/C2) - ${nome}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 20px; border-top: 5px solid #D4AF37;">
          <h2 style="color: #002147; padding-bottom: 10px; margin-bottom: 20px;">
            Novo Cadastro: Nível Avançado (C1/C2)
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 15px; border: 1px solid #f0f0f0;">
            <p style="margin: 8px 0;"><strong>👤 Nome:</strong> ${nome}</p>
            <p style="margin: 8px 0;"><strong>📧 E-mail:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>📱 WhatsApp:</strong> ${whatsapp}</p>
            <p style="margin: 8px 0;"><strong>📍 Localização:</strong> ${localizacao}</p>
            <p style="margin: 8px 0;"><strong>📚 Grupo de Interesse:</strong> <span style="color: #D4AF37; font-weight: bold;">CZÃO (C1/C2)</span></p>
          </div>
          
          <div style="margin-top: 25px; padding: 15px; background-color: #fff9e6; border-radius: 10px; border-left: 4px solid #D4AF37;">
             <p style="margin: 0; font-size: 14px; color: #856404;">
               <strong>Dica Lila:</strong> Aluno avançado interessado em mini-grupos de 6 pessoas. Fale com ele para explicar sobre os encontros de 75 minutos e o conteúdo dinâmico.
             </p>
          </div>
          
          <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center;">
            Enviado via Inglês com Lila • ${new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 403 });

    return NextResponse.json({ success: true, message: "Inscrição para o Czão realizada!" });

  } catch (error) {
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}