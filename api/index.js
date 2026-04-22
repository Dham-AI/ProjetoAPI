const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");

const app = express();
const Port = 5001;

app.listen(Port,()=>{
    console.log(`Servidor rodando na porta ${Port}`)
})

app.get("/teste", (req, res) => {
    res.send("Seja bem-vindo ao teste)
})

app.get("/login", (req, res) => {
    res.send("Vamos fazer o seu login")
})

app.get("/produto", (req, res) => {
    res.send("Vamos cadastrar o seu produto")
})