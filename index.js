const http = require("http");
const fs = require("fs");
let htmlFile = fs.readFileSync("madlib.html").toString();
console.log(htmlFile);
let server = http.createServer((req, res) =>{
    let name = req.url.slice(1).split(".")[0];
    console.log(name);    



});

server.listen(3000, () => console.log("we outchea"));