const router = require("express").Router();
const Cart = require("../models/addToCart")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Add to cart
router.post("/", async (req, res)=>{
  try{
      const {Pimage,email, productName, quantity, calculatedPrice } = req.body;

      const newCart = new Cart({
        Pimage,email, productName, quantity, calculatedPrice
      });

      const savedUser = await newCart.save();

  } catch (err) {
      console.error(err);
      res.status(500).send(); 
  }
});
router.delete('/deletecart/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    await Cart.deleteOne({ _id: itemId });
    res.status(200).json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/cartdisplay', async (req, res) => {
  try {
    const Dproducts = await Cart.find();
    res.json(Dproducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.get('/cartItemCount', async (req, res) => {
  try {
    const itemCount = await Cart.countDocuments();
    res.json({ count: itemCount });
  } catch (error) {
    console.error('Error fetching cart item count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;