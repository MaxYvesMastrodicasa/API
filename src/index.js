import express, { response } from "express";
import carRoutes from "./routes/carRoutes.js"

const app = express();
const portCom = process.env.portCom || 9000;

app.get("/", (req, res) => {
    res.json({message: "https://youtu.be/xvFZjo5PgG0?si=6eANxFLmYL4fpGGj"})
    //res.render("home", {});
  });


// Middlewares
app.use(express.json());
app.use("/cars",carRoutes);



app.listen(portCom, () => {
    console.log("Server is running on port "+ portCom);
  }); 