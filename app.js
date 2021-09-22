const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer ((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World</h1> <br /> <h3>HTML </h3>");
});
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));