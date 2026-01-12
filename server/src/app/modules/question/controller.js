import QuestionService from './service.js'
import EmailService from '../email/service.js'
const GENDER_ENUM = {
  1: 'MASCULINO',
  2: 'FEMININO',
  3: 'PREFIRO NÃO RESPONDER',
}

class QuestionController {
  constructor(questionService, emailService) {
    this.questionService = questionService
    this.emailService = emailService
  }

  async store(request, response) {
    //TODO EXTREME: NECESSARIO VALIDAR SE O USUARIO JA FEZ O PAGAMENTO
    //EXTEMAMENTE IMPORTANTE

    const answers = ['A', 'A', 'A', 'A', 'B', 'B', 'B']

    const answersAsObject = answers.reduce((previous, current, index) => {
      previous['Q' + (index + 1)] = current
      return previous
    }, {})

    const result = this.questionService.calculateUserProfile(answers)
    const report = this.questionService.defineReport(result.percentages)

    const payload = {
      email: 'joaovictorcostasouza15@gmail.com',
      age: 26,
      gender: GENDER_ENUM[1],
      profile: report.type,
      ...result.percentages,
      ...result.scores,
      ...answersAsObject,
      reportId: report.reportId,
    }
    const aas = await Promise.allSettled([
      this.questionService.storeUserData(payload),
      //this.emailService.sendEmailWithAttachment(payload.email, report.reportId),
    ])

    console.log(aas)

    return response.json({ success: true })
  }
}

export default new QuestionController(QuestionService, EmailService)
