const  { readFileSync, writeFileSync } = require ('fs') //fs = file system

//sync read and write

console.log('started')
const first = readFileSync('./content/sub/first.txt') //synchronour read
const second = readFileSync('./content/sub/second.txt')

writeFileSync('./content/sub/reasult-file-1.txt', `here is the result: ${first} \n\n ${second}` , {flag: 'a'})//synchoronous write

console.log('completed')