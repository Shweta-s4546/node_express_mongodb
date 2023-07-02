const { Mongoclient } = require ('mongodb')
const assert = require('assert')

const URL = "mongodb://lpcalhost:27017"

Mongoclient.connect(URL, (err,resp) => {
    if(err)
        assert.deepStrictEqual(err,null)
        console.log('mongodb connected successfuly')
})