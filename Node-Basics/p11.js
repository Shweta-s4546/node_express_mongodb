//dns => domain name system(server)

const dns = require('dns')

dns.lookup('www.be-practical.com', function(err,address,family){
    if(err) throw err;
        console.log('address = ', address)
        console.log('family =', family)
    
        //looup services
        dns.lookupService(address,22,function(err,host,service){
            if(err) throw err;
                console.log('host =', host)
                console.log('service =', service)
        })
})





//www.be-practical.com
// address =  34.102.136.180
// family = 4
// host = 180.136.102.34.bc.googleusercontent.com
// service = ssh