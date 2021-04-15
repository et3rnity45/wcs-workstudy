const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const asyncHandler = require('express-async-handler')
const wilderController = require("./controllers/wilders")

const app = express();
const dbUrl = "mongodb://127.0.0.1:27017/wilderdb";
const port = 5000;

//Database connection
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//Routes
app.post("/api/wilders", asyncHandler(wilderController.create));
app.get("/api/wilders", asyncHandler(wilderController.findAll));
app.get("/api/wilders/:id", asyncHandler(wilderController.findOne));
app.put("/api/wilders/:id", asyncHandler(wilderController.update));
app.delete("/api/wilders/:id", asyncHandler(wilderController.delete));
app.delete("/api/wilders", asyncHandler(wilderController.deleteAll))

app.get("*", (req, res) => {
  res.status(404);
  res.send({ success: false, message: "Wrong adress" });
});

//Handling HTTP errors
app.use((error, req, res, next) => {
  if (error.name === "MongoError" && error.code === 11000) {
    res.status(400);
    res.json({ success: false, message: "The name is already used" });
  }
  res.status(error.status || 500)
  res.json({
    status: error.status || 500,
    message: error.message,
    stack: error.stack
  })
})

//define listening port
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
