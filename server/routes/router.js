import { Router } from 'express'

import testRouter from './api/test.router'

import channelRouter from './api/channel.router'

import userRouter from './api/user.router'

const routes = () => {
  const router = new Router()

  router.get('/', (req, res) => {
    res.status(200).json({ connected: 'OK!' })
  })

  // TODO: Use glob to import all of the files in the ./api/ dir
  router.use('/api', testRouter(router))

  router.use('/api', channelRouter(router))

  router.use('/api', userRouter(router))

  return router
}

export default routes
