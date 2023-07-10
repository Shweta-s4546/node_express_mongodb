const fs = require('fs')

//async append
const data = "\n\n Asynchronously append data to a file, creating the file if it does not exists"

fs.appendFile('./document/test1.txt',data , function(err) {
    if(err) throw err;
    console.log('append successfully')
})