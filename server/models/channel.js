const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ChannelSchema = new Schema({
  owner: [{
    _id: {type: String, ref: 'User'},
    isBlocked: Boolean
  }],
  isActive: Boolean,
  createDate: Date,
  name: String,
  members: [{
    _id: {type: String, ref: 'User'},
    isBlocked: Boolean
  }],
  messages: [{
    _id: {type: String, ref: 'Message'},
    isBlocked: Boolean
  }]

})

ChannelSchema.statics.addChannel = (channel) => {
  return new Promise((resolve, reject) => {
    channel.save((err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const Channel = mongoose.model('Channel', ChannelSchema)
export default Channel
