import User from '../models/user'
import { normalizeExt } from '../../node_modules/electron-builder-lib/out/platformPackager'

const newUser = (req, res) => {
  if (req.body) {
    let user = new User(req.body)
    if (user.pass !== user.passConf) {
      let err = 'passwords do not match'
      err.status = 400
      res.send('passwords do not match')
      return normalizeExt(err)
    }
    if (req.body.email &&
      req.body.username &&
      req.body.pass &&
      req.body.passConf) {
      let userInfo = {
        email: req.body.email,
        username: req.body.username,
        pass: req.body.pass,
        passConf: req.body.passConf
      }
      User.addUser(userInfo)
        .then(addUser => {
          res.status(200).json({ status: 200, data: addUser, message: 'Ok' })
        }).catch(err => {
          res.status(500).json({ status: 500, message: err.message })
        })
    }
  } else throw new Error('unsuccessful. please check for valid input')
}
export default {
  newUser
}
