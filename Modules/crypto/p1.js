const crypto = require('crypto')

const hash = crypto.createHash('sha256') //sha => secured hash algorithms

let input = "hi this is my test message"
let data =  hash.update(input).digest('hex') //binary, hex, base64,baser64url

console.log('data sha(256)=', data)