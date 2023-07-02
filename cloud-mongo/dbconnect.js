const { MongoClient, ServerApiVersion } = require('mongodb')

const url = "mongodb+srv://shweta4546:shweta4546@cluster0.6gcnxbx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    deprecationErrors: true,
    strict: true
  }
});

module.exports = { client }

// async function main() {
//     try {
//         await client.connect()

//         console.log('mongodb connected')
//     } finally {
//         await client.close()
//     }
// }

// main().catch(err=> console.log(err.message))