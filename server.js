const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const registerRoute = require("./Routes/RegisterRoute");

app.use(express.json());

const PORT = process.env.REACT_APP_PORT;
const DATABASE_URL = process.env.REACT_APP_MONGO_URL;

mongoose
  .connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("MongoDB Connected!"))
  .catch(err => {
    console.log(err, "error");
  });

app.use("/api", registerRoute);

app.listen(PORT, () => {
  console.log(`MONGO URL is ${DATABASE_URL}`);
  console.log(`Server is running on port ${PORT}`);
});
