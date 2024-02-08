import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
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
  birthday: {
    type: String,
    required: true
  }
});

const User = model('User', userSchema);

export default User;
