const MongoClient = require('mongodb').MongoClient
const mongoURI = process.env.mongoURI
const abbreviation = process.env.ABBREVIATION
const assert = require('assert')
const ObjectID = require('mongodb').ObjectID
let _db

const connectDB = async () => {
  if (_db) {
    console.warn('Trying to init DB again!')
    return
  }
  let connectionOptions = {
    bufferMaxEntries: 0,
    reconnectTries: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    const client = await MongoClient.connect(mongoURI, connectionOptions)
    console.log('DB initialized - connected to: ' + mongoURI.split('@')[1])
    _db = await client.db(abbreviation)
  } catch (e) {
    console.error(e.message)

    // Exit process with failure
    process.exit(1)
  }
}

function getDB () {
  assert.ok(_db, 'Db has not been initialized.')
  return _db
}

module.exports = {
  connectDB,
  getDB,
  ObjectID
}