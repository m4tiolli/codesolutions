import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {

    const data = await req.json()

    const { negocio, nome, email, whatsapp, pedido, orcamento, localizacao, timezone } = data

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "contato@codesol.com.br",
        pass: "CodeSolutions@2424."
      }
    })

    const mail = await transporter.sendMail({
      from: "Contato via Site",
      to: "contato@codesol.com.br",
      subject: "Nova Solicitação de Contato via Site",
      text: `
            Nova solicitação de contato via site!
            Dados da solicitação:
            Nome: ${nome}
            Email: ${email}
            Whatsapp: ${whatsapp}
            Negócio: ${negocio}
            Pedido: ${pedido}
            Orçamento: ${orcamento}
            Localização: ${localizacao}
            Fuso horário: ${timezone}
      `,
      html: `
            <img src='www.codesol.com.br/logo.svg' align='center' width='200px' heigth='150px' />
            <br/>
            <h1>Nova solicitação de contato via site!</h1>
            <br>
            <p>Dados da solicitação: </p>
            <ul>
              <li>Nome: ${nome}</li>
              <li>Email: ${email}</li>
              <li>Whatsapp: ${whatsapp}</li>
              <li>Negócio: ${negocio}</li>
              <li>Pedido: ${pedido}</li>
              <li>Orçamento: ${orcamento}</li>
              <li>Localização: ${localizacao}</li>
              <li>Fuso horário: ${timezone}</li>
            </ul>
            <a href='mailto:${email}'>Mandar email</a>
            <a href='https://wa.me/${whatsapp}'>Mensagem whatsapp</a>
      `
    })

    console.log(mail.accepted)
    return NextResponse.json({ status: "Email enviado com sucesso!" }, { status: 200 })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ status: "Erro ao enviar email" }, { status: 500 })
  }
}