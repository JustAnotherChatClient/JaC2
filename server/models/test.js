const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TestSchema = new Schema({
  text: String
})

TestSchema.statics.addTest = (test) => {
  return new Promise((resolve, reject) => {
    Test.save((err, item) => {
      if (err) reject(err)
      else resolve(item)
    })
  })
}

const Test = mongoose.model('Test', TestSchema)
export default Test
