import Channel from '../models/channel'

const newChannel = (req, res) => {
  let channel = new Channel(req.body)
  Channel.addChannel(channel)
    .then(newChannel => {
      res.status(200).json({status: 200, data: newChannel, message: 'Ok'})
    }).catch(err => {
      res.status(500).json({status: 500, message: err.message})
    })
}

export default {
  newChannel
}
