import QuestionService from './service.mjs'
import EmailService from '../email/service.mjs'
import { randomUUID } from 'crypto'

import * as z from 'zod'

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

  async store(event) {
    //TODO EXTREME: NECESSARIO VALIDAR SE O USUARIO JA FEZ O PAGAMENTO
    //EXTEMAMENTE IMPORTANTE

    const body = JSON.parse(event.body)

    const person = z.object({
      email: z.email({ error: 'Email inválido' }),
      age: z
        .number({ error: 'Idade inválida' })
        .lte(100, { error: 'idade fora do range necessário' })
        .gte(0, { error: 'idade fora do range necessário' }),
      gender: z.number({ error: 'Genêro inválido' }).lte(3).gte(1),
      answers: z.array(z.enum(['A', 'B', 'C'])).length(7),
    })

    const result = person.safeParse(body)

    if (!result.success) {
      return result.error // ZodError instance
    }

    const resultProfile = this.questionService.calculateUserProfile(result.data.answers)
    const report = this.questionService.defineReport(resultProfile.percentages)

    const payload = [
      randomUUID(),
      result.data.email,
      result.data.age,
      GENDER_ENUM[result.data.gender],
      result.data.answers,
      report.type,
      ...resultProfile.percentages,
      ...resultProfile.scores,
      report.reportId,
      new Date().toISOString(),
    ]

    await Promise.allSettled([
      this.questionService.storeUserData(payload),
      this.emailService.sendEmailWithAttachment(result.data.email, report.reportId),
    ])

    return { success: true }
  }
}

export default new QuestionController(QuestionService, EmailService)
