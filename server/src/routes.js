import { Router } from 'express'
import questionController from './app/modules/question/controller.js'

const routes = Router()

routes.get('/', (...args) => questionController.store(...args))

export default routes
