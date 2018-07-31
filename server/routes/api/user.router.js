import UserController from '../../controllers/user.controller'

const routes = (router) => {
  router.post('/user', UserController.newUser)
  return router
}

export default routes
