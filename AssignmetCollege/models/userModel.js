const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  id:{
    type:Number,
    requred:[true,'please provide id'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  hobbies: {
    type: Array,
  },

});

