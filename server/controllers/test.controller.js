import Test from '../models/test'

const testPost = (req, res) => {
  const {text} = req.body
  const test = new Test({text})
  Test.addTest(test)
    .then(newTest => {
      res.json({test: newTest})
    })
}

export default {
  testPost
}
