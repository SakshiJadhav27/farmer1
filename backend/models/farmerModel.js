const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  GovID: { 
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

const Farmer = mongoose.model("farmer", farmerSchema);

module.exports = Farmer;