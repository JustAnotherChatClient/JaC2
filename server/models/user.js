const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

let UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  // doing the hashing else where, leaving this commented in case we need this later
  // hashPass: String,
  pass: {
    type: String,
    required: true
  },
  passConf: {
    type: String,
    required: true
  },
  isActive: Boolean,
  createDate: Date,
  lastLogin: Date,
  status: String,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  friends: [{
    _id: { type: String, ref: 'User' },
    isBlocked: Boolean
  }]

})

UserSchema.statics.addUser = (user) => {
  return new Promise((resolve, reject) => {
    user.save((err, user) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.updateUser = (id, User) => {
  return new Promise((resolve, reject) => {
    User.findByIdAndUpdate(id, User, { new: true }, function (err, user) {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    this.find((err, users) => {
      if (err) reject(err)
      else resolve(users)
    })
  })
}

UserSchema.statics.getUser = (id) => {
  return new Promise((resolve, reject) => {
    this.findById(id, (err, user) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.getFriendsByUserId = (id) => {
  return new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
      if (err) reject(err)
      else resolve(user.friends)
    })
  })
}

UserSchema.statics.disableUser = (id) => {
  return new Promise((resolve, reject) => {
    this.findByIdAndUpdate(id, { $set: { isActive: false } }, { new: true }, (err, user) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.enableUser = (id) => {
  return new Promise((resolve, reject) => {
    this.findByIdAndUpdate(id, { $set: { isActive: true } }, { new: true }, (err, user) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.authenticate = function (email, pass, username, callBack) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callBack(err)
      } else if (!user) {
        err.status = 401
        return callBack(err)
      }
      bcrypt.compare(pass, user.pass, function (err, res) {
        if (res === true) {
          return callBack(null, user)
        } else {
          return callBack(err)
        }
      })
    })
}

UserSchema.pre('save', function (next) {
  let user = this
  bcrypt.hash(user.pass, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.pass = hash
    next()
  })
})

const User = mongoose.model('User', UserSchema)
export default User
