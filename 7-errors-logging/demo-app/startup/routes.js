const express = require("express");
const error = require("../middleware/errors");
const productsRoutes = require("../routes/products");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/v1/products", productsRoutes);
  app.use(error);
};
