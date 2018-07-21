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
    _id: {type: String, ref: 'User'},
    isBlocked: Boolean
  }]

})

UserSchema.statics.addUser = (User) => {
  return new Promise((resolve, reject) => {
    User.save((err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const User = mongoose.model('User', UserSchema)
export default User
