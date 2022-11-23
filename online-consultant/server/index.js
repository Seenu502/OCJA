const express = require('express')
const app =express();
const mysql = require('mysql')

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"systemhos",
})

app.post

app.listen(5000,() => {
    console.log("success");
})