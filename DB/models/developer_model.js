import mongoose from "mongoose";

const { Schema, model } = mongoose;

const developerSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const Developer = model('Developer', developerSchema);

export default Developer;