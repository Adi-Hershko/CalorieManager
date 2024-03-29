// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
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
  birthday: {
    type: String,
    required: true
  }
});

const User = model('User', userSchema);

export default User;
