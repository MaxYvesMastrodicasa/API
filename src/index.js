import "dotenv/config";
import express from "express";
import objectsRoutes from "./routes/penne.js";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";
import { handleUncaughtErrors } from "./middlewares/error.js";
import isAuth from "./middlewares/auth.js";

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
app.use("/penne",isAuth, objectsRoutes);
app.use("/auth", authRoutes);

//
app.use((err,req,res,next)=>{
  res.status(500).json({error: err.message});
});

app.use("/error", (req, res) => {
  try {
    throw new Error("This is an error");
  } catch (error) {}
});

// Middleware pour gerer les erreurs
app.use(handleUncaughtErrors);

mongoose.connect(MONGO_STRING).then(()=> {
  // console.log("Connected to the database !");

  app.listen(portCom, () => {
    console.log("Server is running on port "+ portCom);
  }); 
});

