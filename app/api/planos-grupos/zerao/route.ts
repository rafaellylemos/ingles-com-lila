import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, whatsapp, plano, localizacao, email } = body;

    if (!nome || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando (nome, email ou whatsapp)." },
        { status: 400 }
      );
    }

    console.log(`[LOG] Processando Lista de Espera: ${plano} | Aluno: ${nome}`);

    const { data, error } = await resend.emails.send({
      from: 'Lista de Espera Lila <onboarding@resend.dev>',
      to: ['rafaellyltbmarques@gmail.com'],
      subject: `🚀 [LISTA ESPERA] ${plano} - ${nome}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 20px; border-top: 5px solid #D4AF37;">
          <h2 style="color: #002147; padding-bottom: 10px; margin-bottom: 20px;">
            Novo Cadastro na Lista de Espera
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 15px; border: 1px solid #f0f0f0;">
            <p style="margin: 8px 0;"><strong>👤 Nome:</strong> ${nome}</p>
            <p style="margin: 8px 0;"><strong>📧 E-mail:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>📱 WhatsApp:</strong> ${whatsapp}</p>
            <p style="margin: 8px 0;"><strong>📍 Localização:</strong> ${localizacao}</p>
            <p style="margin: 8px 0;"><strong>📚 Grupo de Interesse:</strong> <span style="color: #D4AF37; font-weight: bold;">${plano}</span></p>
          </div>
          
          <div style="margin-top: 25px; padding: 15px; background-color: #fff9e6; border-radius: 10px; border-left: 4px solid #D4AF37;">
             <p style="margin: 0; font-size: 14px; color: #856404;">
               <strong>Dica:</strong> Para falar com o aluno, você pode responder este e-mail diretamente ou clicar no número do WhatsApp acima.
             </p>
          </div>
          
          <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center;">
            Enviado via Inglês com Lila • ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro técnico do Resend:", error);
      return NextResponse.json({ error }, { status: 403 });
    }

    return NextResponse.json({
      success: true,
      message: "Inscrição realizada com sucesso!",
      id: data?.id
    });

  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno ao processar sua solicitação." },
      { status: 500 }
    );
  }
}