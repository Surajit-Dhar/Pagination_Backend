const express = require("express");
const connect = require("./src/config/db");
const userController = require("./src/controllers/user.controller");

const app = express();
app.use(express.json());
app.use("/users", userController);

// connecting to localhost
const start = async ()=>{
    await connect();
    app.listen(3000, ()=>{        
        console.log("Connected on 3000");
    });   
}
start();





