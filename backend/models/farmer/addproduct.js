const mongoose = require('mongoose');

const addProductSchema = new mongoose.Schema({
    email:{
        type:String
    },
    productName:{
        type: String
    }, 
    price:{
        type: Number
    },
    quantity: {
        type: Number
    }, 
    description: {
        type: String
    }, 
    image: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const addProduct = new mongoose.model("addProduct", addProductSchema);

module.exports = addProduct;