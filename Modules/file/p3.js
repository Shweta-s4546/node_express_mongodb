const fs = require('fs')

const data = "All file system operations have synchronous,callback and promised-based forms and are accessible using both CommonJS syntax and ES6 Modules(ESM)";

//async write
fs.writeFile('./document/test1.txt', data , function(err){
    if(err) throw err;
    console.log('async file write completed')
})