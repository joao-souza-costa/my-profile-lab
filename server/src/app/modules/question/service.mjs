import GoogleDriveService from '../google-drive/service.mjs'
import EmailService from '../email/service.mjs'
import questions from './questions.mjs'

class QuestionService {
  constructor(googleService, emailService) {
    this.googleService = googleService
    this.emailService = emailService
  }

  async storeUserData(payload) {
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
    //TODO: Melhorar essa logica
    const isBetween45and55 = (v) => v >= 45 && v <= 55
    const max = Math.max(razao_pt, emoca_pt, acao_pt)

    let reportId = null
    let type = null

    // Dominância clara
    if (razao_pt >= 60) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Razão Dominante'
    } else if (emoca_pt >= 60) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Emoção Dominante'
    } else if (acao_pt >= 60) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Ação Dominante'
    } else if (isBetween45and55(razao_pt) && isBetween45and55(emoca_pt)) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Razão + Emoção'
    } else if (isBetween45and55(razao_pt) && isBetween45and55(acao_pt)) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Razão + Ação'
    } else if (isBetween45and55(emoca_pt) && isBetween45and55(acao_pt)) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Emoção + Ação'
    }

    // Perfis equilibrados (inclinação)
    else if (max === razao_pt) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Equilibrado (inclinação Razão)'
    } else if (max === emoca_pt) {
      reportId = '14kN3w9EX9EG5d3WvC5sPyL8tUPpwaizy'
      type = 'Equilibrado (inclinação Emoção)'
    }

    return { reportId, type }
  }
}

export default new QuestionService(GoogleDriveService, EmailService)
