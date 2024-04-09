import "dotenv/config";
import express from "express";
import carsRoutes from "./routes/carRoutes.js";
import mongoose from "mongoose";

const app = express();
const portCom = process.env.PORT || 9000;
const MONGO_STRING = process.env.MONGO_STRING;

// console.log("env: ", process.env.MONGO_STRING);

app.get("/", (req, res) => {
    res.json({message: "https://youtu.be/xvFZjo5PgG0?si=6eANxFLmYL4fpGGj"})
    //res.render("home", {});
  });


// Middlewares
app.use(express.json());
app.use("/cars", carsRoutes);

mongoose.connect(MONGO_STRING).then(()=> {
  // console.log("Connected to the database !");

  app.listen(portCom, () => {
    console.log("Server is running on port "+ portCom);
  }); 
});

