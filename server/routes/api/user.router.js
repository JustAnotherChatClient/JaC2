import UserController from '../../controllers/user.controller'

const routes = (router) => {
  router.post('/user', UserController.newUser)
  router.get('/users', UserController.getUsers)
  router.get('/user/:id', UserController.getUserById)
  router.put('/user/:id', UserController.updateUserById)

  return router
}

export default routes
