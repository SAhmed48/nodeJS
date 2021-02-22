const mongoose = require("mongoose");

function connectDB(cb) {
  try {
    mongoose
      .connect("mongodb://localhost/shop-error", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((response) => {
        cb(true, { ...response });
      })
      .catch((err) => {
        cb(false, { ...err });
      });
  } catch (exception) {
    console.log(false, { ...exception });
  }
}

module.exports = connectDB;
