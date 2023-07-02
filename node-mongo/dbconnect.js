const {MongoClient } = require('mongodb')
const assert = require('assert')

//url
const URL =  'mongodb://localhost:27017'
const db_name = 'db_mongo_test'

//reference
const client = new  MongoClient(URL)

async function main(){
    await client.connect()
        console.log("mongo connected successfully")
    retrun `..done`
}

main()
    .then(res => {
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(() => client.close())