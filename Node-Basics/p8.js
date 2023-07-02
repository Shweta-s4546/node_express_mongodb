//multithread cluster.isWorker

const cluster = require('cluster')

if(cluster.isWorker){
    console.log('node is running in multithread mode')

}else{
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}