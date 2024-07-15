const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const routeTerapeuta = require("./src/routes/routeTerapeuta");
const routeEncargada = require("./src/routes/routeEncargada");
const routeServicio = require("./src/routes/routeServicio");
const routeCierre = require("./src/routes/routeCierre");
const liquidacionTerapeuta = require("./src/routes/liquidacionTerapeuta");
const liquidacionEncargada = require("./src/routes/liquidacionEncargada");

const PORT = process.env.PORT || 3000;

// SERVIDOR
const app = express();

// habilitar body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Habiliar los cors
app.use(cors());

// URL del app
app.use("/api/terapeuta", routeTerapeuta());
app.use("/api/encargada", routeEncargada());
app.use("/api/servicio", routeServicio());
app.use("/api/cierre", routeCierre());
app.use("/api/liqTerapeuta", liquidacionTerapeuta());
app.use("/api/liqEncargada", liquidacionEncargada());


app.listen(PORT, () => {
  console.log("Running server on port", PORT);
});