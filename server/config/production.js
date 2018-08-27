module.exports = {
  mongodb: {
    uri: process.env.MONGO_HOST,
    options: {
      replicaset: 'Cluster0',
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      auth: {
        authdb: 'admin'
      }
    }
  }
}
