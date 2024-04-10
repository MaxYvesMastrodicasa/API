import { mockCars } from "../data/mock.js";
import Objetc from "../models/penne.js"; // Import the Objetc model
import { validationResult } from "express-validator";

export const getObjetcs = (req, res) => {
  Objetc.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getError = ()=>{
  throw new Error("This is an error");
};

export const getObjetc = (req, res) => {
  const id = req.params.id;
  Objetc.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const createObjetc = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);

  // on cree un nouvelle instance de Objetc
  const newObjetc = new Objetc(bodyContent);

  // on sauvegarde la nouvelle instance de Objetc
  newObjetc
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
  // const newObjetc = { id, ...bodyContent };
  // mockCars.push(newObjetc);
  // response.status(201).json(newObjetc);
};

export const updateObjetc = (request, response) => {
  const bodyContent = request.body;
  const id = request.params.id;
  const name = bodyContent.name;
  const description = bodyContent.description;
  const groupe = bodyContent.groupe;
  if (bodyContent.groupe.trim().isEmpty)
  Objetc.updateOne({ _id: id }, { name: name, description: description, groupe: groupe })
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export const deleteObjetc = (request, response) => {
  const id = request.params.id;
  Objetc.deleteOne({ _id: id })
    .then((result) => {
      response.status(204).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // response.status(400).json({ message: error.message });
    });

  // const Objetc = Objetc.find((Objetc) => Objetc.id === id);
  // if (Objetc) {
  //   mockCars = mockCars.filter((Objetc) => Objetc.id !== id);
  //   response.status(204).end();
  // } else {
  //   response.status(404).json({ message: "Objetc not found" });
  // }
};