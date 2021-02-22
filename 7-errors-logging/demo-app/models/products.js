const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = new mongoose.model("products", ProductSchema);

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
  });
  return schema.validate(user);
}

module.exports = {
  ProductSchema,
  Product,
  validateProduct,
};
