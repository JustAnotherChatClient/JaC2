import { Router } from 'express'

import testRouter from './api/test.router'

const routes = () => {
  const router = new Router()

  router.get('/', (req, res) => {
    res.status(200).json({ connected: 'OK!' })
  })

  // TODO: Use glob to import all of the files in the ./api/ dir
  router.use('/api', testRouter(router))

  return router
}

export default routes
