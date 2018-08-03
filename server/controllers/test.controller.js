import Test from '../models/test'

const testPost = (req, res) => {
  const { text } = req.body
  Test.addTest({ text })
    .then(newTest => {
      res.statu(200).json({test: newTest})
    }).catch(err => {
      console.log(err)
      res.status(500).json({status: 500, message: err.message})
    })
}

export default {
  testPost
}
