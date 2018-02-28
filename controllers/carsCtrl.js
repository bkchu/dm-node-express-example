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

module.exports = {
  getCars: (req, res, next) => {
    res.status(200).json(cars);
  }
};
