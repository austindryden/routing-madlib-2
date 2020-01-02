const http = require("http");
const fs = require("fs");

const htmlFile = fs.readFileSync("madlib.html").toString();

console.log(htmlFile);
let server = http.createServer((req, res) =>{
    let url = req.url.slice(1).split("/");
    let name = url[0];
    let place = "";
    if (url.length > 0){
        place = url[1];
    }
    console.log(name);    
    res.writeHead(200,{
        "Content-Type" : "text/html"
    })
    let newHTML = htmlFile.replace("***NAME***", name).replace("***PLACE***", place);
    
    res.end(newHTML);
});

server.listen(3000, () => console.log("we outchea"));