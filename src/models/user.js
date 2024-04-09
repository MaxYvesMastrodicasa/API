import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email : {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require:true,
    },
    name:{
        type: String,
        require:true,
    },
    phoneNumber:{
        type: String,
        require:true,
    }
});

export default model("User", userSchema);