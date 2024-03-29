// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const developerSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
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