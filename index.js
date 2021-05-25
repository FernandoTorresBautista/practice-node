const express = require("express");
const conectarDB = require("./config/db");

//create the server
const app = express();

//connect to db
conectarDB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, ()=>{
  console.log("run server...");
});