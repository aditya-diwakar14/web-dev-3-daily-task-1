// const fs = require('fs')
// const data = fs.readFileSync('notes.txt','utf-8')
// console.log(data)
//fs.writeFileSync('notes.txt','My Name Is Aditya')//

// const path = require('path');
// const filePath = path.join(__dirname, 'test','hello.text');
// console.log(filePath);

// const os= require('os');
// const user = os.userInfo();
// console.log(user);

// const des = require('./data/des');
// console.log(des);

// const process = require('process');
// console.log(process.argv[3]);

// require('dotenv').config()
// const process = require('process');
// console.log(process.env.PORT);

const http = require('http');
require('dotenv').config();
const process =require ('process');
const port =process.env.PORT || 3000;
const server =http.createServer((req,res)=>{
    if (req.method === 'GET' && req.url === '/api/students'){
        
    
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(
        JSON.stringify({count:students.length,students})
    );
    }
    else if (req.method === 'GET' && req.url ==='/api/students/count'){
        res.writeHead(200,{'content-type': 'application/json'});
        res.end(JSON.stringify({count: students.lenght}));
    }
});

server.listen(port, () =>{
    console.log('Server is running on port ${port}')
});