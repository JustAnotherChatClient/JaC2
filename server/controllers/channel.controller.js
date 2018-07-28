import Channel from '../models/channel'

const newChannel = (req, res) => {
  if (req.body) {
    let channel = new Channel(req.body)
    Channel.addChannel(channel)
      .then(newChannel => {
        res.status(200).json({ status: 200, data: newChannel, message: 'Ok' })
      }).catch(err => {
        res.status(500).json({ status: 500, message: err.message })
      })
  } else throw new Error('unsuccessful. please check for valid input')
}

const returnAllChannels = (req, res) => {
  Channel.getAllChannels()
    .then(activeChannel => {
      res.status(200).json({ status: 200, data: activeChannel, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const returnSpecificChannel = (req, res) => {
  if (req.body) {
    const { id } = req.params
    Channel.getChannelById(id)
      .then(newChannel => {
        res.status(200).json({ status: 200, data: newChannel, message: 'Ok' })
      }).catch(err => {
        res.status(500).json({ status: 500, message: err.message })
      })
  } else throw new Error('unsuccessful. please check for valid input')
}

const updateSpecificChannel = (req, res) => {
  if (req.body) {
    // console.log(req.body)
    const channel = {}
    Object.keys(req.body).forEach(key => {
      console.log(key, req.body[key])
      channel[key] = req.body[key]
    })
    console.log(channel)
    const { id } = req.params
    Channel.updateChannel(id, channel)
      .then(newChannel => {
        res.status(200).json({ status: 200, data: newChannel, message: 'Ok' })
      }).catch(err => {
        res.status(500).json({ status: 500, message: err.message })
      })
  } else throw new Error('unsuccessful. please check for valid input')
}

export default {
  newChannel, returnAllChannels, returnSpecificChannel, updateSpecificChannel
}
