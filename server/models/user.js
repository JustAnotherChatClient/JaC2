const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    trim: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
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

UserSchema.statics.updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    User.findByIdAndUpdate(id, user, { new: true }, (err, user) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find((err, users) => {
      if (err) reject(err)
      else resolve(users)
    })
  })
}

UserSchema.statics.getUser = (id) => {
  return new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
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

const User = mongoose.model('User', UserSchema)
export default User
