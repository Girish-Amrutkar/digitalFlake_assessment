const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Category = require("./db/Category");
const Product = require("./db/Product");
const jwt = require("jsonwebtoken");
const key = "digitalflake";

// Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// Route for Login API
app.post("/", async (req, res) => {
  if (req.body.email && req.body.password) {
    let result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");
    if (result) {
      jwt.sign({ result }, key, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          console.log(err);
          res.send({ message: "Something went wrong" });
        } else {
          res.send({ result, token });
        }
      });
    } else {
      res.send({ message: "Invalid Credentials" });
    }
  } else {
    res.send({ message: "All fields are required" });
  }
});

// Route forAdding New Category API
app.post("/add-category", verifyToken, async (req, res) => {
  let category = new Category(req.body);
  let result = await category.save();
  res.send(result);
});

// Route for Category List API
app.get("/category-list", verifyToken, async (req, res) => {
  let category = await Category.find();
  res.send(category);
});

// Route for Delete Particular Category API
app.delete("/delete-category/:id", verifyToken, async (req, res) => {
  let result = await Category.deleteOne({ _id: req.params.id });
  res.send(result);
});

// Route for Adding New Product API
app.post("/add-product", verifyToken, async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

// Route for Product List API
app.get("/product-list", verifyToken, async (req, res) => {
  let product = await Product.find();
  res.send(product);
});

// Route for Delete Particular Product API
app.delete("/delete-product/:id", verifyToken, async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

// Function for verifying token
function verifyToken(req, res, next) {
  let token = req.headers["authorization"];

  if (token) {
    token = token.split(" ")[1];

    jwt.verify(token, key, (err, valid) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      }
    });
  } else {
    res.status(401).send({ message: "Please provide token" });
  }
  next();
}
app.listen(5000);
