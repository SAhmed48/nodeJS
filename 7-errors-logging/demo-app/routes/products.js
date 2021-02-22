const express = require("express");
const mongoose = require("mongoose");
const {
  Product,
  validateProduct,
  ProductSchema,
} = require("../models/products");

const asyncMiddleware = require("../middleware/async");

const router = express.Router();

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    throw new Error("Unable to get products");
    const products = await Product.find();
    res.status(200).send(products);
  })
);

router.post(
  "/add-product/",
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = await User.findOne({ name: req.body.name });
    if (product) return res.status(400).send("Product already exists.");

    new_product = new Product(req.body);
    await new_product.save();

    res.status(201).send(new_product);
  })
);

module.exports = router;
