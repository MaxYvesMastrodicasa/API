import { mockCars} from "../data/mock.js";

export const getCars = (req, res) => {
    res.json(mockCars);
  };

  export const getCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    // console.log(id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid ID" });
    }
    const car = mockCars.find((car) => car.id === id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  };

  export const createCar = (req, res) => {
    const bodyContent = req.body;
    const id = mockCars[mockCars.length - 1].id + 1;
    const newCar = { id, ...bodyContent };
    mockCars.push(newCar);
    res.status(201).json(mockCars);
  };

  export const udpateCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    // console.log(id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid ID" });
    }
    const car = mockCars.find((car) => car.id === id);
    if (car) {
      const bodyContent = req.body;
      mockCars[id - 1] = {
        id: id,
        brand: bodyContent.brand,
        model: bodyContent.model,
      };
      res.status(201).json(mockCars);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  };

  export const deleteCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    // console.log(id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid ID" });
    }
    const car = mockCars.find((car) => car.id === id);
    if (car) {
      const carDel = mockCars.filter((car) => car.id !== id);
      //mockCars= mockCars.filter(car=>car.id !== id);
      res.status(201).json(carDel);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  };