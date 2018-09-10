module.exports = {
  mongodb: {
    uri: process.env.MONGO_HOST,
    options: {
      replicaSet: 'Cluster0-shard-0',
      ssl: true,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      auth: {
        authdb: 'admin'
      }
    }
  }
}
