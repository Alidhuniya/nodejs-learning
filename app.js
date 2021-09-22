const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer ((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        }

        else {
            res.end(data)
        }
    })
});
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));