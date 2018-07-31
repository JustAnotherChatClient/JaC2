const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  hashPass: String,
  isActive: Boolean,
  createDate: Date,
  lastLogin: Date,
  status: String,
  friends: [{
    _id: { type: String, ref: 'User' },
    isBlocked: Boolean
  }]

})

UserSchema.statics.addUser = (User) => {
  return new Promise((resolve, reject) => {
    User.save((err, user) => {
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
