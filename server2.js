const http =require('http');
const fs =require ('fs');


const server = http.createServer(function(req ,res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    try{
        const html= fs.readFileSync('index.html');
        res.write("My 1st Task at Gwing Software Technologies");
        res.write(" Hello world");
        res.end();
    }
    catch(e) {
        res.statusCode =404;
        res.write("bad request");
        console.log(e);
        res.end();
    }
})
const port =4001;
server.listen(port ,function(){
    console.log("server running on " + port);
})