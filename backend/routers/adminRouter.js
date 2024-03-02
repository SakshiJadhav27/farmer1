const router = require("express").Router();
const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingAdmin.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    const secretKey = process.env.JWT_SECRET || 'defaultSecretKey';

    const token = jwt.sign(
      {
        user: existingAdmin._id,
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

module.exports = router;