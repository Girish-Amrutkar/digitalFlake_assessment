// DB Configuration to connect with MongoDB
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/digitalflake")
  .then(() => {
    console.log("DB connected...!!!");
  })
  .catch((err) => {
    console.log("Error: ", err, "DB not connected...!!!");
  });
