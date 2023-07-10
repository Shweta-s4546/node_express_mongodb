const fs = require('fs') //fs will help to read data
const readLine = require('readline')// readline reads the data line by line or character by character

//read line
const txt = readLine.createInterface({
    input:fs.createReadStream('./document/myfile.txt')
})

var li=0;
txt.on("line", function(data){
    li++;
    console.log(`Line number = ${li}:${data}`)
});