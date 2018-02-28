const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const carsCtrl = require(`${__dirname}/controllers/carsCtrl`);

const port = 3001;

const app = express();

app.use((req, res, next) => {
  console.log("HIT ON EACH REQUEST");
  next();
});
app.use(json());
app.use(cors());

app.get("/api/cars", carsCtrl.getCars);

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});
