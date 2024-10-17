const express = require('express')
const app = express()
const db = require('./config/db');
const path = require("path")

app.use(express.urlencoded())

app.use('/', require('./routes'))

app.listen(2000,(err)=>{
    console.log(err ? err : "Server Running on port 2000");
});