const winston = require("winston");
require("winston-mongodb");
const config = require("dotenv");
const express = require("express");
const connectDB = require("./utils/db_connection");

const port = process.env.PORT || 9000;
const app = express();

// follow the separation of concern rules here.
require("./startup/routes")(app);
require("./startup/errorLogger")(winston, process);

app.listen(4000, () => {
  connectDB((success, kwargs) => {
    if (success) {
      console.log("Connected to MongoDB..");
    } else {
      console.log("Failed to connect to MongoDB..");
    }
  });
});
