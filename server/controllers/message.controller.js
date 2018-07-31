import Message from '../models/message'

const newMessage = (req, res) => {
  const msg = new Message(req.body)
  Message.addMessage(msg)
    .then(newMsg => {
      res.status(200).json({ status: 200, data: newMsg, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const deleteMessageById = (req, res) => {
  const { id } = req.params
  Message.deleteMessage(id)
    .then(delMsg => {
      res.status(200).json({ status: 200, data: delMsg, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const getMessageById = (req, res) => {
  const { id } = req.params
  Message.getMessageById(id)
    .then(getMsg => {
      res.status(200).json({ status: 200, data: getMsg, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const getMessages = (req, res) => {
  Message.getMessages()
    .then(getMessages => {
      res.status(200).json({ status: 200, data: getMessages, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const getMessagesByOwner = (req, res) => {
  const { owner } = req.params
  Message.getMessagesByOwner(owner)
    .then(getMsgByOwner => {
      res.status(200).json({ status: 200, data: getMsgByOwner, message: 'Ok' })
    }).catch(err => {
      res.status(500).json({ status: 500, message: err.message })
    })
}

const updateMessageById = (req, res) => {
  if (req.body) {
    const message = {}
    Object.keys(req.body).forEach(key => {
      message[key] = req.body[key]
    })
    const { id } = req.params
    Message.updateMessage(id, message)
      .then(updateMsg => {
        res.status(200).json({ status: 200, data: updateMsg, message: 'Ok' })
      }).catch(err => {
        res.status(500).json({ status: 500, message: err.message })
      })
  } else throw new Error('Error updating message!')
}

export default {
  newMessage,
  deleteMessageById,
  getMessageById,
  getMessages,
  getMessagesByOwner,
  updateMessageById
}
