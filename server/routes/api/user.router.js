import UserController from '../../controllers/user.controller'

const routes = (router) => {
  router.post('/user', UserController.newUser)
  router.get('/users', UserController.getUsers)
  router.get('/user/:id', UserController.getUserById)
  router.put('/user/:id', UserController.updateUserById)
  router.post('/user/disable/:id', UserController.disableUserById)
  router.post('/user/enable/:id', UserController.enableUserById)

  return router
}

export default routes
