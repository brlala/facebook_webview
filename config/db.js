const MongoClient = require('mongodb').MongoClient
const mongoURI = process.env.mongoURI

const connectDB = async () => {
  try {
    await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)

    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   client.close();
// });