import { google } from 'googleapis'
import credentials from './credentials.js'
import { randomUUID } from 'crypto'

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
})

class GoogleDriveService {
  constructor() {
    this.sheets = google.sheets({ version: 'v4', auth })
    this.drive = google.drive({ version: 'v3', auth })
  }

  storeDataInSheet(spreadsSheetId, data) {
    const createdAt = new Date().toISOString()
    const payload = [randomUUID(), ...Object.values(data), createdAt]

    return this.sheets.spreadsheets.values.append({
      spreadsheetId: spreadsSheetId,
      range: `${this.getMonthSheetName()}!A2`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',

      requestBody: {
        values: [payload],
      },
    })
  }

  async createMonthSheet(spreadsheetId) {
    const title = this.getMonthSheetName()

    const res = await this.sheets.spreadsheets.get({
      spreadsheetId,
    })

    const sheetAlreadyCreated = res.data.sheets.some((s) => s.properties.title === title)

    if (sheetAlreadyCreated) {
      return Promise.resolve({
        success: true,
        text: 'planilha já existe',
      })
    }

    const id = Number(title.split('-')[1])

    return await this.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                sheetId: id,
                title,
              },
            },
          },
          {
            updateCells: {
              start: {
                rowIndex: 0,
                columnIndex: 0,
                sheetId: id,
              },
              rows: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'ID' } },
                    { userEnteredValue: { stringValue: 'email' } },
                    { userEnteredValue: { stringValue: 'idade' } },
                    { userEnteredValue: { stringValue: 'genero' } },
                    { userEnteredValue: { stringValue: 'perfil_do_relatorio' } },
                    { userEnteredValue: { stringValue: 'razao_pt' } },
                    { userEnteredValue: { stringValue: 'emocao_pt' } },
                    { userEnteredValue: { stringValue: 'acao_pt' } },
                    { userEnteredValue: { stringValue: 'razao_valores' } },
                    { userEnteredValue: { stringValue: 'emocao_valores' } },
                    { userEnteredValue: { stringValue: 'acao_valores' } },
                    { userEnteredValue: { stringValue: 'Q1' } },
                    { userEnteredValue: { stringValue: 'Q2' } },
                    { userEnteredValue: { stringValue: 'Q3' } },
                    { userEnteredValue: { stringValue: 'Q4' } },
                    { userEnteredValue: { stringValue: 'Q5' } },
                    { userEnteredValue: { stringValue: 'Q6' } },
                    { userEnteredValue: { stringValue: 'Q7' } },
                    { userEnteredValue: { stringValue: 'id_relatorio' } },
                    /* { userEnteredValue: { stringValue: 'id_transacao' } },
                    { userEnteredValue: { stringValue: 'status_transacao' } }, */
                    { userEnteredValue: { stringValue: 'created_at' } },
                  ],
                },
              ],
              fields: 'userEnteredValue',
            },
          },
        ],
      },
    })
  }

  async findOrCreateSpreadsheet(folderId = '18M_KVjHDOPXytUPBFdl4Fp7UA0KfMa2J') {
    //TODO: Pegar o folder id das envs

    const name = this.getReportSpreadSheetName()

    let res = await this.drive.files.list({
      q: `
      name = '${name}'
      and mimeType = 'application/vnd.google-apps.spreadsheet'
      and '${folderId}' in parents
      and trashed = false
    `,
      fields: 'files(id, name)',
    })

    return res.data.files[0]?.id || '1H5bbXmF9ae15vQn3ZHPyQwMTo39xf22_W-dIe6-6AjU'
  }

  getMonthSheetName() {
    const date = new Date()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    return `${date.getUTCFullYear()}-${month}`
  }

  getReportSpreadSheetName() {
    const date = new Date()
    return `report-${date.getUTCFullYear()}`
  }
}

export default new GoogleDriveService()
