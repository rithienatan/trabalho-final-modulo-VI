/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flavius
 * 
 * @date 01-05-2022
 * 
 * @version 0.1.0
 */
//---------- Imports ----------
const http = require("http");
const fs = require("fs").promises;

//---------- Server configs ---------
const configs = {
    host: "localhost",
    port: 8000
};

//---------- Create Server ----------
const server = http.createServer((req, res) => {
    const path = req.url;
    const requestType = req.method;

    //---------- Routes ----------
    //----- initial route -----
    if(path === "/" && requestType === "GET")
    { 
        fs.readFile("index.html")
        .then(webpage => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            return res.end(webpage);
        });
    }//end if

    //----- bad route -----
    res.setHeader("Content-Type", "text/html");
    res.writeHead(403);
    res.write("<html><body><h1>403 Forbidden</h1></body></html>");
    res.end();
});

//---------- Running Server ----------
server.listen(configs.port, configs.host, () => {
    console.log(`Server is running on http://${configs.host}:${configs.port}`);
});