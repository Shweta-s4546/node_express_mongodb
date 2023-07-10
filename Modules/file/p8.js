const fs = require('fs')

//sync unlink

fs.unlinkSync('./document/test2.txt')

console.log('file successfully deleted')