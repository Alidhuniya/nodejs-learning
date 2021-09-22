const {writeFile, writeFileSync} = require("fs");

const newItem = "This is awesome 2";

writeFile("hell.txt", newItem, { flag : "a"}, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("content written!");
})