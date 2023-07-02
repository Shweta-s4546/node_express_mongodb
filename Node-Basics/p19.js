const http = require('http')

const server = http.createServer((req,res) => {
    //req.url => read the active path from the address bar of browser

    switch(req.url){
        case "/" :
            res.end(`<div>
                            <nav>
                                <a href = "/">Home</a>
                                <a href = "/about">About</a>
                                <a href = "/service">Service</a>
                                <a href = "/contact">Contact</a>
                            </nav>
                            <div>
                                <h1>Home Page</h1>
                            </div>
                    </div>`)
                    break;
           case "/about" : 
                res.end(`<div>
                             <nav>
                                <a href = "/">Home</a>
                                <a href = "/about">About</a>
                                <a href = "/service">Service</a>
                                <a href = "/contact">Contact</a>
                            </nav>
                            <div>
                                <h1>About Page</h1>
                            </div>
                        </div>`)
                        break;
             case "/contact" : 
                     res.end(`<div>
                                     <nav>
                                        <a href = "/">Home</a>
                                        <a href = "/about">About</a>
                                        <a href = "/service">Service</a>
                                        <a href = "/contact">Contact</a>
                                    </nav>
                                    <div>
                                        <h1>Contact Page</h1>
                                    </div>
                                </div>`)
                                break;
            default:
                res.end(`<div>
                    <h1>Requested oath not found</h1>
                    <a href="/">return to home</a>
                </div>`)
                break;
        
    }
})

server.listen(4100, ()=> {
    console.log(`server is started and running @ http://localhost:4100`)
})