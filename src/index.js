import express from "express";

const app = express();
const portCom = process.env.portCom || 9000;

app.get("/", (req, res) => {
    res.render("https://youtu.be/xvFZjo5PgG0?si=6eANxFLmYL4fpGGj")
    //res.render("home", {});
  });

app.listen(portCom, () => {
    console.log("Server is running on port "+ portCom);
  }); 