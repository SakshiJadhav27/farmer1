const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser')


dotenv.config();

// set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json())

app.use(
  cors({
    origin: [
      "http://localhost:3000"],
    credentials: true,
  })
);

// connect to mongoDB

mongoose.connect(
  process.env.MDB_CON,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

// set up routes

app.use("/farmer", require("./routers/farmerRouter"));
app.use("/wholeseller",require("./routers/wholesalerRouter"))
app.use("/addProducts", require("./routers/farmer/addProducts"));
app.use("/admin", require("./routers/adminRouter"));
app.use("/addToCart", require("./routers/addToCart"));

