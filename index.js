const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const carsCtrl = require(`${__dirname}/controllers/carsCtrl`);

const port = 3001;

const app = express();
app.use(json());
app.use(cors());

app.use((req, res, next) => {
  console.log("HIT ON EACH REQUEST");
  console.log("REQ.BODY: " + JSON.stringify(req.body));
  console.log("REQ.PARAMS: " + req.params);
  next();
});

app.get("/api/cars", carsCtrl.getCars);
app.post("/api/cars", carsCtrl.addCar);
app.put("/api/cars/reset", carsCtrl.resetCars);
app.put("/api/cars/:id", carsCtrl.updateCar);
app.delete("/api/cars/:id", carsCtrl.deleteCar);

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});
