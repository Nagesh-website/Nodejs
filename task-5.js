



const http = require("http");   
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        fs.readFile("./index.json","UTF8",(err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                // res.write(data);
                // console.log(err);


                let val = JSON.parse(data).data;    
                
                res.end(JSON.stringify(val));
            }
        });
    } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
    }
});

const port = 3002;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




// const http = require("http");   
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//    if(req.method == "POST") {
//         fetch("https://fakestoreapi.com/products")
//         .then((val) => {
//             // // console.log(res);
//             // res.write(res.toString());
//             // res.end();
//             return val.json();  
//         }).then((val) => {
//             // console.log(data);
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(val));
//             res.end();
//         }).catch((err) => {
//             console.error(err);
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Internal Server Error");
//         });
//     }
//     else {
//         res.writeHead(405, { "Content-Type": "text/plain" });
//         res.end("Method Not Allowed");
//     }
// });

// const port = 3002;

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

