// rutas para productos
const express = require("express");
const router = express.Router();

router.post('/', ()=>{
  console.log("creando producto");
})

module.exports = router;