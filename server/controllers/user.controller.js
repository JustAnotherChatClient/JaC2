
import User from '../models/user'
// import { resolve } from '../../node_modules/bluebird-lst';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const newUser = (req, res) => {
  const user = new User(req.body)
  User.addUser(user)
    .then(newUser => {
      res.status(200).json({ status: 200, data: newUser, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const getUsers = (req, res) => {
  User.getAllUsers()
    .then(getUsers => {
      res.status(200).json({ status: 200, data: getUsers, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const getUserById = (req, res) => {
  const { id } = req.params
  User.getUser(id)
    .then(getUserById => {
      res.status(200).json({ status: 200, data: getUserById, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
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

const logIn = async (req, res) => {
  const { email, username, password } = req.body
  try {
    let user = await User.getUserByEmail(email)
    if (!user) user = await User.getUserByUsername(username)
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'auth failed'
        })
      }
      if (result) {
        const token = jwt.sign({
          email: user[0].email,
          username: user[0].username,
          _id: user[0]._id
        }, process.env.JWT_KEY, { expiresIn: '1h' })
        return res.status(200).json({
          message: 'auth success. welcome to skynet.',
          token
        })
      } res.status(401).json({
        message: 'auth failed'
      })
    })
  } catch (err) {
    res.json(err)
  }
  /*
  const hash = (string) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(string, 10, (err, hash) => {
        if (err) reject(err)
        else resolve(hash)
      })
    })
  }

  const signUp = (req, res) => {
    User.find({ email: req.body.email } && { username: req.body.username } && { pass: req.body.pass } && { confirmPass: req.body.confirmPass })
      .exec()
      .then(user => {
        if (user >= 1) {
          return res.status(409).json({
            message: 'a user with this email or username already exists'
          })
        } else if (req.body.pass !== req.body.confirmPass) {
          return res.status(409).json({
            message: 'passwords do not match'
          })
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                err: err
              })
            } else {
              const user = new User({
                email: req.body.email,
                username: req.body.username,
                pass: hash
              })
              user
                .save()
                .then(result => {
                  res.status(201).json({
                    message: 'user created'
                  })
                })
                .catch(() => {
                  res.status(500).json({
                    message: 'Unhandled Exception Thrown'
                  })
                })
            }
          })
        }
      })
  }
  */
}

export default {
  newUser,
  getUsers,
  getUserById,
  updateUserById,
  logIn
}
