
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb+srv://hackingprotection11:RN73jJvUb1077tOH@cluster0.64hlp4f.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected with db");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: "String",
  email: "String",
  password: "String",
});
const userModel = new mongoose.model("User", userSchema);
app.post("/register", async (req, res) => {
  const newUser = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    newUser,
  });
});
app.listen(4000, () => {
  console.log("first");
});
// const bodyParser = require("body-parser");
// const express = require("express");
// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb+srv://hackingprotection11:RN73jJvUb1077tOH@cluster0.64hlp4f.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((res) => {
//     console.log("connected with db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const app = express();
// app.use(express.json());
// const userSchema = new mongoose.Schema({
//   name: "String",
//   email: "String",
//   password: "String",
// });
// const userModel = new mongoose.model("User", userSchema);
// app.post("/register", async (req, res) => {
//     console.log("test")
//   const newUser = await userModel.create(req.body);
//   console.log(req.body)

//   res.status(200).json({
//     success: true,
//     newUser
//   });
// });
// app.listen(4000, () => {
//   console.log("first");
// });