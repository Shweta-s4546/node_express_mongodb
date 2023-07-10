//hmac => hash based message authentication code
const crypto = require('crypto','test1234')

const hash = crypto.createHash('sha256') //sha => secured hash algorithms

let input = "welcome to node js"

let res =  hash.update(input).digest('base64') //binary, hex, base64,baser64url

console.log('ouput=', res)