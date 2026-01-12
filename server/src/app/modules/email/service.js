import { Resend } from 'resend'
import GoogleDriveService from '../google-drive/service.js'

const resend = new Resend('re_CK5VJ6y8_EaX1xPA7vbFJc7Ks672XgVyu')

class EmailService {
  constructor(resend, drive) {
    this.resend = resend
    this.drive = drive
  }

  async sendEmailWithAttachment(email, fileId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy') {
    //TODO: Criar template de email :D
    //TODO: Configurar dominio de email
    //TODO: Falar com a Nath para gerar os 9 relatórios

    return await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: String(email).toLowerCase(),
      subject: 'Mapeamento de Perfil',
      html: '<p>Está funcionando precisamos pensar em um template</p>',
      attachments: [
        {
          path: `https://drive.usercontent.google.com/u/0/uc?id=${fileId}`, //URL Para doownload
          filename: 'report-profile.pdf',
        },
      ],
    })
  }
}

export default new EmailService(resend, GoogleDriveService)
