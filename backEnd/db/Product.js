const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  packSize: {
    type: String,
  },
  mrp: {
    type: Number,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Product", productSchema);
