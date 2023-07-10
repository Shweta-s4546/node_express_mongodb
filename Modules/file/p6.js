const fs = require('fs')

//sync append
const data = "\n\n Asynchronously append data to a file, creating the file if it does not exists";

fs.appendFileSync('./document/test2.txt', data)

console.log('append sync success')