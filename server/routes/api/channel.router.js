import ChannelController from '../../controllers/channel.controller'

const routes = (router) => {
  router.post('/channel', ChannelController.newChannel)
  router.get('/channel', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test-get' })
  })
  router.get('/channel/:id', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test-get-id' })
  })
  router.put('/channel', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test-put' })
  })
  router.put('/channel/:id', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test-put-id' })
  })
  return router
}

export default routes
