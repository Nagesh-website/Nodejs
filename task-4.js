

let fs=require('fs');
let http=require('http');

let server=http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/plain");

    switch(req.method){
        case "POST":

        fs.mkdir("./temp",(err)=>{
            if(err){
                console.log(err);
            }
        });

        fs.writeFile("temp/data.txt","Hello World",(err)=>{
            if(err){
                console.log(err);
            }   

            res.end();
        });
            break;

        case "GET":
            res.write("getting the data")
            res.end();
            break; 

        case "PUT":
            res.write("updating the data")
            res.end();
            break;

        case "DELETE":  

            fs.rmdir("temp",{ recursive: true },(err)=>{
                if(err){
                    console.log(err);
                }
                res.end();
            });
            // res.write("deleting the data")
            break;
        default:
            res.write("Invalid Request")
            res.end();
    }
    
    
});

let port=3000;  
server.listen(port,()=>{    
    console.log(`Server is running on port ${port}`);       
});



