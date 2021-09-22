const fs = require("fs")

fs.readFile("hell.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(data);
})

console.log("log from outside");