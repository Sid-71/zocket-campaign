const express = require("express");
const mongoose = require("mongoose");
const app = express();
const campaignRoute = require("./routes/campaign");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");
require("dotenv").config()
app.use(express.json());


app.use("/campaign",campaignRoute);
app.use("/product",productRoute);
app.use("/task",taskRoute);
app.use("/user",userRoute);


app.listen(4000, () => {
    console.log("server is running 4000");
})




const url = process.env.MONGO_URI;
console.log("url",url);
mongoose.connect(url)
  .then(() => {
    console.log('db is connected');
  })
  .catch((err) => {
    console.log(err);
  });














