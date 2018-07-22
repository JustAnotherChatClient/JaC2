const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  text: String,
  firstName: String,
  lastName: String,
  email: String,
  hashPass: String,
  isActive: Boolean,
  createDate: Date,
  lastLogin: Date,
  status: String,
  friend: [{
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

UserSchema.statics.updateUser = (id, User) => {
  return new Promise((resolve, reject) => {
    User.findByIdAndUpdate(id, { $set: { firstName: User.firstName, lastName: User.lastName } }, { new: true }, function (err, user) {
      if (err) reject(err)
      else resolve(user)
    })
  })
}

UserSchema.statics.getAllUsers = (User) => {
  return new Promise((resolve, reject) => {
    User.find((err, users) => {
      if (err) reject(err)
      else resolve(users)
    })
  })
}

UserSchema.statics.getUser = (id, User) => {
  return new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
      if (err) reject(err)
      else resolve(user)
    })
  })
}



const User = mongoose.model('User', UserSchema)
export default User
