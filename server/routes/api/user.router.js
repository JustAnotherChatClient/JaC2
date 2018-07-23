import UserController from '../../controllers/user.controller'

const routes = (router) => {
  router.post('/user', UserController.newUser)
  router.get('/user', (req, res) => {
    res.status(200).json({ connected: 'OK!', router: 'test' })
  })
  router.get('/users', UserController.getUsers)

  return router
}

export default routes
