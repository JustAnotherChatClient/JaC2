import TestController from '../../controllers/test.controller'

const routes = (router) => {
  router.post('/test', TestController.testPost)
  router.get('/test', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test' })
  })
  return router
}

export default routes
