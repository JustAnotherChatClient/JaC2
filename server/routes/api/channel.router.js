import ChannelController from '../../controllers/channel.controller'

const routes = (router) => {
  router.post('/channel', ChannelController.newChannel)
  router.get('/channel', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test' })
  })
  return router
}

export default routes
