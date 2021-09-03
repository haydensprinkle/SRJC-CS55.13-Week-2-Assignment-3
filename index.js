//load core modules
const http = require("http");
const fs = require("fs").promises;

//function to respond to http requests
const requestListener = function (req, res){
    if(req.url === "/"){
      fs.readFile(__dirname + "/page.html")
      .then(contents => {
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      });
    } else{
      fs.readFile(__dirname + "/data.json")
      .then(contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
    });
  };
};

// spin up http server
const server = http.createServer(requestListener);

//define TCP port and IP address
const port = "8080";
const host = "0.0.0.0";

//call the listen() method to start listening to http requests
server.listen(
  port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`);
  }
);