import UserController from '../../controllers/user.controller'
import { Mongoose } from 'mongoose'

const bcrypt = require('brcypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const mongoose = require('mongoose')

const routes = (router) => {
  router.post('/login', (req, res) => {
    User.find({ email: req.body.email } && { username: req.body.username })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: 'auth failed'
          })
        }
        bcrypt.compare(req.body.pass, user[0].password, (err, result) => {
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
            },
              process.env.JWT_KEY,
              {
                expiresIn: '1h'
              })
            return res.status(200).json({
              message: 'auth success. welcome to skynet'
            })
          } res.status(401).json({
            message: 'auth failed'
          })
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'Unhandled Exception Thrown'
        })
      })
  },
    router.post('/signup', req, res, next => {
      User.find({ email: req.body.email } && { username: req.body.username } && { pass: req.body.pass } && { confirmPass: req.body.confirmPass })
        .exec()
        .then(user => {
          if (user >= 1) {
            return res.status(409).json({
              message: 'a user with this email or username already exists'
            })
          }
          else if (pass != confirmPass) {
            return res.status(409).json({
              message: 'passwords do not match'
            })
          }
          else {
            bcry.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                return res.status(500).json({
                  err: err
                })
              } else {
                const user = new User({
                  _id: new mongoose.Types.ObjectId(),
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
                  .catch(err => {
                    res.status(500).json({
                      message: 'Unhandled Exception Thrown'
                    })
                  })

                  return router
              }
            }

export default routes
