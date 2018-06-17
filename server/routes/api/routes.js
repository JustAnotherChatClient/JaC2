import { Router } from 'express'
import TestController from '../controllers/test.controller.js'

const routes = () => {
  const router = new Router()

  router.post('/test', TestController.testPost)
}

export default routes
