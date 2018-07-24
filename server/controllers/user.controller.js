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

export default {
  newUser,
  getUsers,
  getUserById
}
