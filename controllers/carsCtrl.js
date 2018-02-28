const cars = [
  {
    id: 1,
    make: "Pontiac",
    model: "Fiero"
  },
  {
    id: 2,
    make: "BMW",
    model: "320"
  },
  {
    id: 3,
    make: "DMC",
    model: "DeLorean"
  }
];
let id = 4;
module.exports = {
  getCars: (req, res, next) => {
    res.status(200).json(cars);
  },

  addCar: (req, res, next) => {
    if (req.body) {
      let newCar = {
        id: id,
        make: req.body.make,
        model: req.body.model
      };
      id++;
      cars.push(newCar);
      res.status(200).json(cars);
    } else {
      res.status(500).json({ message: "Invalid Car" });
    }
  },

  updateCar: (req, res, next) => {
    const selected = cars.filter(val => val.id === parseInt(req.params.id))[0];
    if (!selected) {
      res.status(500).json({ message: "Car Not Found" });
    } else {
      selected.make = req.body.make;
      res.status(200).json(cars);
    }
  },

  resetCars: (req, res, next) => {
    const carsReset = [
      {
        id: 1,
        make: "Pontiac",
        model: "Fiero"
      },
      {
        id: 2,
        make: "BMW",
        model: "320"
      },
      {
        id: 3,
        make: "DMC",
        model: "DeLorean"
      }
    ];
    cars.splice(0, cars.length);
    for (let car of carsReset) {
      cars.push(car);
    }
    id = 4;
    res.status(200).json(cars);
  },

  deleteCar: (req, res, next) => {
    const selected = cars.findIndex(val => val.id === parseInt(req.params.id));
    cars.splice(selected, 1);
    cars.forEach((car, index) => {
      car.id = index + 1;
    });
    res.status(200).json(cars);
  }
};
