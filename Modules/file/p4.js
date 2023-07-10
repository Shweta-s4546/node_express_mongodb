const fs = require('fs')

const data = "All file system operations have synchronous,callback and promised-based forms and are accessible using both CommonJS syntax and ES6 Modules(ESM)";

//async write
fs.writeFileSync('./document/test2.txt', data)

console.log('sync write operation completed')