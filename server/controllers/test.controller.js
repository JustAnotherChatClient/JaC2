import Test from '../models/test'

const testPost = (req, res) => {
  const { text } = req.body
  Test.addTest({ text })
    .then(newTest => {
      res.json({test: newTest})
    })
}

export default {
  testPost
}
