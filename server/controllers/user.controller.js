import User from '../models/user'

const newUser = (req, res) => {
  const user = new User(req.body)
  User.addUser(user)
    .then(newUser => {
      res.status(200).json({status: 200, data: newUser, message: 'Ok'})
    }).catch(err => {
      res.status(500).json({status: 500, message: err.message})
    })
}

const getUsers = (req, res) => {
  const { users } = req.body
  User.getAllUsers({ users })
    .then(getUsers => {
      res.status(200).json({status: 200, data: getUsers, message: 'Ok'})
    }).catch(err => {
      res.status(500).json({status: 500, message: err.message})
    })
}

const getUserById = (req, res) => {
  const { id } = req.params
  User.getUser(id)
    .then(getUserById => {
      res.status(200).json({status: 200, data: getUserById, message: 'Ok'})
    }).catch(err => {
      res.status(500).json({status: 500, message: err.message})
    })
}

const disableUserById = (req, res) => {
  const { id } = req.params
  User.disableUser(id)
    .then(disableUserById => {
      res.status(200).json({status: 200, data: disableUserById, message: 'Ok'})
    }).catch(err => {
      res.status(500).json({status: 500, message: err.message})
    })
}

const enableUserById = (req, res) => {
  const { id } = req.params
  User.enableUser(id)
    .then(enableUserById => {
      res.status(200).json({status: 200, data: enableUserById, message: 'Ok'})
    }).catch(err => {
      res.status(500).json({status: 500, message: err.message})
    })
}

const updateUserById = (req, res) => {
  if (req.body) {
    const user = {}
    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key]
    })
    const { id } = req.params
    User.updateUser(id, user)
      .then(updateUser => {
        res.status(200).json({ status: 200, data: updateUser, message: 'Ok' })
      }).catch(err => {
        res.status(500).json({ status: 500, message: err.message })
      })
  } else throw new Error('Error updating user!')
}

const authenticateUser = (req, res) => {

}

export default {
  newUser,
  getUsers,
  getUserById,
  updateUserById,
  disableUserById,
  enableUserById,
  authenticateUser
}
