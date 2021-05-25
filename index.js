const express = require("express");
const conectarDB = require("./config/db");
const productoController = require("./controllers/productoController");

//create the server
const app = express();

//connect to db
conectarDB();

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Home page');
});

//app.use('/api/productos', require('./routes/producto'));
app.use('/api/productos', productoController.crearproducto);

app.listen(4000, ()=>{
  console.log("run server...");
});