let http=require('http');
let fs=require('fs');
//create server
let server=http.createServer((req,res)=>{
    console.log("server started on 3000");
    if(req.url==='/login' && req.method==='POST'){
        let body='';
        req.on('data',(data)=>{
            body+=data;
        });
        req.on('end',()=>{
            console.log(body);
            res.end();
        });
    }else if(req.url==='/cart' && req.method==='GET'){
        fs.readFile('cart.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("Cart page not found");
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }else if(req.url==='/orders' && req.method==='GET'){
        fs.readFile('orders.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("Orders page not found");
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }else if(req.url==='/profilepage' && req.method==='PUT'){
        fs.readFile('profile.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("Profile page not found");
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }else if(req.url==='/deleteuser' && req.method==='DELETE'){
        fs.readFile('deleteuser.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("Delete User page not found");
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }   
})
//run server
server.listen(3000,'localhost',()=>{
    console.log("server listening on port 3000");
});