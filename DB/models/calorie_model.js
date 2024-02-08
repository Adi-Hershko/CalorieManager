import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const calorieSchema = new Schema({
  user_id: {
    type: Number,
    required: true    
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  },
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 31
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'other'],
    required: true
  }
});

const Calorie = model('Calorie', calorieSchema);

export default Calorie;
