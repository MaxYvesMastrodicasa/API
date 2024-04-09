import express, { response } from "express";
import { mockCars } from "../data/mock.js";
import { getCar,getCars,createCar,udpateCar,deleteCar } from "../cotroller/mock.js";

const router = express.Router();

// GET http://localhost:3001/cars
router.get("/", getCars);

// GET http://localhost:3001/cars/1
router.get("/:id", getCar);

// POST http://localhost:3001/cars
router.post("/", createCar);

// PUT http://localhost:3001/cars/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", udpateCar);

// DELETE http://localhost:3001/cars/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deleteCar);

export default router;
