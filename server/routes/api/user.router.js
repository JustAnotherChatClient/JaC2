import UserController from '../../controllers/user.controller'

const routes = (router) => {
  router.post('/user', UserController.newUser)
  router.get('/users', UserController.getUsers)
  router.get('/user/:id', UserController.getUserById)

  return router
}

export default routes
