import { Router } from 'express'
import MessageController from '../../controllers/message.controller'

const routes = () => {
  const router = new Router()

  router.post('/message', MessageController.newMessage)
  router.get('/messages', MessageController.getMessages)
  router.get('/messages/:owner', MessageController.getMessagesByOwner)
  router.get('/message/:id', MessageController.getMessageById)
  router.put('/message/:id', MessageController.updateMessageById)
  router.delete('/message/:id', MessageController.deleteMessageById)

  return router
}

export default routes
