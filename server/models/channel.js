const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ChannelSchema = new Schema({
  owner: { type: String, ref: 'User' },
  isActive: Boolean,
  createDate: Date,
  name: String,
  members: [{
    _id: { type: String, ref: 'User' }
  }],
  messages: [{
    _id: { type: String, ref: 'Message' }
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

ChannelSchema.statics.updateChannel = (_id, channel) => {
  return new Promise((resolve, reject) => {
    this.findByIdAndUpdate(_id, channel, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

ChannelSchema.statics.disableChannel = (_id, channel) => {
  return new Promise((resolve, reject) => {
    this.findByIdAndRemove(_id, channel, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

ChannelSchema.statics.getAllChannels = (channel) => {
  return new Promise((resolve, reject) => {
    this.find(channel, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

ChannelSchema.statics.getChannelById = (_id, channel) => {
  return new Promise((resolve, reject) => {
    this.findOne(_id, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

ChannelSchema.statics.getChannelByOwner = (owner, channel) => {
  return new Promise((resolve, reject) => {
    this.findOne(owner, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const Channel = mongoose.model('Channel', ChannelSchema)
export default Channel
