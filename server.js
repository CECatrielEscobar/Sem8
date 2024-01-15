const express = require("express");
const app = express();
const productRouter = require("./routesProducts");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", productRouter);
app.listen(8080, () => {
  console.log("Servidor activo en el puerto 8080");
});
