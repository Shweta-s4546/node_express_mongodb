const net = require('net')

const server = net.createServer(function(socket){
    socket.end("my message is here.")
})

//is uused to handle run time error
server.on("error", (err) => {
    if(err) throw err;
});

server.listen(() => {
    let address = server.address()
    console.log(`server port %j`, address); //ipv6
});