const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ChannelSchema = new Schema({
  owner: { type: String, ref: 'User' },
  isActive: Boolean,
  createDate: { type: Date, default: Date.now },
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
    Channel.findByIdAndUpdate(_id, { $set: channel }, { new: true }, (err, item) => {
      // findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }
      if (err) reject(err)
      else resolve(item)
    })
  })
}

ChannelSchema.statics.getAllChannels = () => {
  return new Promise((resolve, reject) => {
    Channel.find((err, channels) => {
      if (err) reject(err)
      else resolve(channels)
    })
  })
}

ChannelSchema.statics.getChannelById = (_id) => {
  return new Promise((resolve, reject) => {
    Channel.findOne({_id}, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

ChannelSchema.statics.getChannelByOwner = (owner) => {
  return new Promise((resolve, reject) => {
    this.findOne({owner}, (err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const Channel = mongoose.model('Channel', ChannelSchema)
export default Channel
