import mongoose from "mongoose";
const { Schema, model } = mongoose;

const objectSchema = new Schema({
  name: String,
  description: String,
  groupe: String,
});

export default model("Objetc", objectSchema);