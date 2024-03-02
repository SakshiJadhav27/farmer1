const mongoose = require("mongoose");

const wholesalerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { 
    type: String, 
    required: true 
  },
  passwordHash: { 
    type: String, 
    required: true
  },
});

const Wholesaler = mongoose.model("wholesaler", wholesalerSchema);

module.exports = Wholesaler;