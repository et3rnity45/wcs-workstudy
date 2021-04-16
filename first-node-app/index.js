const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./routes');
const PORT = 5000;

//Database connection
require('./models');

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

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

//Define listening port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
