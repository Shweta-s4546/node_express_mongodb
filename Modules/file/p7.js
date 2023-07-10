const fs = require('fs')

//async unlink
fs.unlink('./document/test1.txt', function(err){
    if(err) throw err;
    console.log('file successfully deleted')
})