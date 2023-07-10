const fs = require('fs')

//sync read, there is no callback function
const data = fs.readFileSync('./document/myfile.txt')

console.log('sync read =', data)
console.log('string =', data.toString())