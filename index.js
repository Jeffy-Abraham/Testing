const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");
var auth = require("./routes/auth/auth-route");
var authLogin=require('./routes/auth/auth-route-login')
var post=require('./routes/image/uploadImage')
app.use(cors());

app.use(express.json());
const port = 4000;
mongoose
  .connect(
    "mongodb+srv://jeffy:ur13it040@cluster0.e8dlj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((success) => {
    console.log("Connection Established with Database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/postImage",post)
app.use("/authLogin",authLogin);
app.use("/auth", auth);




app.listen(port, () => {
  console.log("Port is running");
});
app.use