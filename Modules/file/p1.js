const fs = require('fs')

//async read, it have callback function
fs.readFile('./document/myfile.txt', function(err,data) {
    if(err) throw err;
    console.log('async read =',data)
    console.log('string =', data.toString())
});