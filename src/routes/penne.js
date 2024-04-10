import express, { response } from "express";
import { mockCars } from "../data/mock.js";
import { getObjetc,getObjetcs,createObjetc,updateObjetc,deleteObjetc } from "../controller/penne.js";
import { body } from "express-validator";

const router = express.Router();

// GET http://localhost:3001/cars
router.get("/", getObjetcs);

// GET http://localhost:3001/cars/1
router.get("/:id", getObjetc);

// POST http://localhost:3001/cars
router.post("/",[
    body("brand").trim().isLength({max: 20,min: 2}),
    body("model").trim().isLength({max: 100,min: 2})
    ], createObjetc);

// PUT http://localhost:3001/cars/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", updateObjetc);

// DELETE http://localhost:3001/cars/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deleteObjetc);

export default router;
