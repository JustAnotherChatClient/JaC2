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

MessageSchema.statics.deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    Message.findByIdAndRemove(id, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.getMessagesByOwner = (owner) => {
  return new Promise((resolve, reject) => {
    Message.find({ owner }, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.getMessageById = (id) => {
  return new Promise((resolve, reject) => {
    Message.findById(id, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.getMessages = () => {
  return new Promise((resolve, reject) => {
    Message.find((err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

MessageSchema.statics.updateMessage = (id, message) => {
  return new Promise((resolve, reject) => {
    Message.findByIdAndUpdate(id, message, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const Message = mongoose.model('Message', MessageSchema)
export default Message
