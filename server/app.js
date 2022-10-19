const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json({ limit: "25mb" }));

const createDetails = require("./routers/paths");
const imagesRouter = require("./routers/image.router");
const checkDetails = require("./routers/checkCardDetails");

app.use(createDetails);
app.use(imagesRouter);
app.use(checkDetails);

// connect to mongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
      console.log("Connected to MongoDB");
    });
  })
  .catch((err) => {
    console.log(err);
  });
