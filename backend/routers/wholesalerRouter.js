const router = require("express").Router();
const Wholesaler = require("../models/wholesalerModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register

router.post("/register", async (req, res)=>{
  try{
      const {name, email, password, passwordVarify} = req.body;

      //validation
      if( !name || !email || !password || !passwordVarify)
          return res
              .status(400)
              .json({errorMessage: "Plese enter all required fields"}); 

      if (password < 6)
          return res
              .status(400).json({errorMessage: "please enter a password of at least 6 characters",
          });

      if (password !== passwordVarify)
      return res
          .status(400).json({errorMessage: "please enter the same password  twice",
      });

      const existingWholesaler = await Wholesaler.findOne({email});
      if (existingWholesaler)
          return res
          .status(400).json({errorMessage: "An account with this email alrady exists.",
      });

      //hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      //save new user account to the database
      const newWholesaler = new Wholesaler({
          name, email, passwordHash
      });

      const savedWholesaler = await newWholesaler.save();

  } catch (err) {
      console.error(err);
      res.status(500).send(); 
  }
});

// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingWholesaler = await Wholesaler.findOne({ email });
    if (!existingWholesaler)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingWholesaler.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });


// Add to cart
router.post("/addToCart", async (req, res)=>{
  try{
      const {email, productName, quantity, calculatedPrice } = req.body;

      const newWholesaler = new Wholesaler({
        email, productName, quantity, calculatedPrice
      });

      const savedWholesaler = await newWholesaler.save();

  } catch (err) {
      console.error(err);
      res.status(500).send(); 
  }
});

    // sign the token

    const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

    const token = jwt.sign(
      {
        user: existingWholesaler._id,
      },
      secretKey
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});
router.get('/wholesalerRegister', async (req, res) => {
  try {
    const wholesalers = await Wholesaler.find();
    res.json(wholesalers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;