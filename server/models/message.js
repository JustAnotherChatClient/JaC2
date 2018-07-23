const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MessageSchema = new Schema({
  owner: { type: String, ref: 'User' },
  createDate: { type: Date, default: Date.now },
  content: String,
  contentType: String,
  isActive: Boolean,
  deletedBy: { type: String, ref: 'User' }
})

MessageSchema.statics.addMessage = (message) => {
  return new Promise((resolve, reject) => {
    message.save((err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.deleteMessage = (_id) => {
  return new Promise((resolve, reject) => {
    this.findByIdAndRemove(_id, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.getMessageByOwner = (owner) => {
  return new Promise((resolve, reject) => {
    this.findOne({owner}, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.updateMessage = (_id, message) => {
  return new Promise((resolve, reject) => {
    this.findByIdAndUpdate(_id, message, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const Message = mongoose.model('Message', MessageSchema)
export default Message
