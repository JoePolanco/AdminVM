// Get dependencias
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("./config/conexion").connect();

//Routes
const loginRoutes = require('./routes/login');
const dataCenterRoutes = require('./routes/dataCenter.routes');
const elementosdataCenterRoutes = require('./routes/elementosDataCenter.routes');
const ventanaMantenimientoRoutes = require('./routes/ventanaMantenimiento.routes');


// Middleware General
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "La API esta corriendo..." });
});

app.use('/auth', loginRoutes);
app.use('/datacenter', dataCenterRoutes);
app.use('/elementosDataCenter', elementosdataCenterRoutes);
app.use('/ventanaMantenimiento', ventanaMantenimientoRoutes);

// Port
const port = process.env.PORT || "3030";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));