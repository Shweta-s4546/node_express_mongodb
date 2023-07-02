//cluster  cluster.isMarker
const cluster = require('cluster')

//isMaster => true = single thread
//isMaster => false multi thread

if(cluster.isMaster){
    console.log('node is running is single thread')
}else{
    console.log('no action')
}