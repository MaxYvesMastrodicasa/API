import { mockCars } from "../data/mock.js";
import Car from "../models/cars.js"; // Import the Car model
import { validationResult } from "express-validator";

export const getCars = (req, res) => {
  Car.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getCar = (req, res) => {
  const id = req.params.id;
  Car.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const createCar = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);

  // on cree un nouvelle instance de Car
  const newCar = new Car(bodyContent);

  // on sauvegarde la nouvelle instance de Car
  newCar
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // response.status(400).json({ message: error.message });
    });
  // const id = mockCars.length + 1;
  // const newCar = { id, ...bodyContent };
  // mockCars.push(newCar);
  // response.status(201).json(newCar);
};

export const udpateCar = (request, response) => {
  const bodyContent = request.body;
  const id = request.params.id;
  const brand = bodyContent.brand;
  const model = bodyContent.model;
  Car.updateOne({ _id: id }, { brand: brand, model: model })
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const deleteCar = (request, response) => {
  const id = request.params.id;
  Car.deleteOne({ _id: id })
    .then((result) => {
      response.status(204).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // response.status(400).json({ message: error.message });
    });

  // const car = Car.find((car) => car.id === id);
  // if (car) {
  //   mockCars = mockCars.filter((car) => car.id !== id);
  //   response.status(204).end();
  // } else {
  //   response.status(404).json({ message: "Car not found" });
  // }
};
