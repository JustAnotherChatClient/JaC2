import { Router } from 'express'
import ChannelController from '../../controllers/channel.controller'

const routes = () => {
  const router = new Router()

  router.post('/channel', ChannelController.newChannel)
  router.get('/channel', ChannelController.returnAllChannels)
  router.get('/channel/:id', ChannelController.returnSpecificChannel)
  router.put('/channel/:id', ChannelController.updateSpecificChannel)
  return router
}

export default routes
