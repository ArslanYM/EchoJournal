const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
const app = express();
app.use(cors());
app.use(express.json());

// routes
const userRouter = require("./routes/user");
// envs
const PORT = 3000;
const MONGO_URL = "mongodb+srv://ars:663663@blogapp.mbksvib.mongodb.net/";

//app.use
app.use("/user", userRouter);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "blog",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });
