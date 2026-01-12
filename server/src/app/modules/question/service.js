import GoogleDriveService from '../google-drive/service.js'
import EmailService from '../email/service.js'
import questions from './questions.js'

class QuestionService {
  constructor(googleService, emailService) {
    this.googleService = googleService
    this.emailService = emailService
  }

  async storeUserData(payload) {
    //TODO: Conversar com a Nath sobre qual nome das colunas e dados do usuário.
    //TODO: Adicionar folder ID como uma constant no env

    const spreadSheetID = await this.googleService.findOrCreateSpreadsheet()
    await this.googleService.createMonthSheet(spreadSheetID)
    await this.googleService.storeDataInSheet(spreadSheetID, payload)
  }

  calculateUserProfile(answers) {
    const scores = {
      razao: 0,
      emocao: 0,
      acao: 0,
    }

    let count = 0
    let value = ''
    let triade = ''

    for (const question of questions) {
      value = answers[count]
      triade = question[value]
      scores[triade] += question.weight
      count++
    }

    const percentages = {
      razao_pt: this.calculatePercentage(scores.razao),
      emocao_pt: this.calculatePercentage(scores.emocao),
      acao_pt: this.calculatePercentage(scores.acao),
    }

    return {
      scores,
      totalScore: 17,
      percentages,
    }
  }

  calculatePercentage(score) {
    const questionsTotalWeight = 17
    return Number(((score / questionsTotalWeight) * 100).toFixed(1))
  }

  defineReport({ razao_pt, emoca_pt, acao_pt }) {
    // Dominância clara
    if (razao_pt >= 60) {
      return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Razão Dominante' }
    }

    if (emoca_pt >= 60) {
      return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Emoção Dominante' }
    }

    if (acao_pt >= 60) {
      return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Ação Dominante' }
    }

    // Perfis híbridos
    const isBetween45and55 = (v) => v >= 45 && v <= 55

    if (isBetween45and55(razao_pt) && isBetween45and55(emoca_pt)) {
      return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Razão + Emoção' }
    }

    if (isBetween45and55(razao_pt) && isBetween45and55(acao_pt)) {
      return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Razão + Ação' }
    }

    if (isBetween45and55(emoca_pt) && isBetween45and55(acao_pt)) {
      return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Emoção + Ação' }
    }

    // Perfis equilibrados (inclinação)
    const max = Math.max(razao_pt, emoca_pt, acao_pt)

    if (max === razao_pt) {
      return {
        reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy',
        type: 'Equilibrado (inclinação Razão)',
      }
    }

    if (max === emoca_pt) {
      return {
        reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy',
        type: 'Equilibrado (inclinação Emoção)',
      }
    }

    return { reportId: '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy', type: 'Equilibrado (inclinação Ação)' }
  }
}

export default new QuestionService(GoogleDriveService, EmailService)
