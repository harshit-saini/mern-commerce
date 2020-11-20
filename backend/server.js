const express = require("express");
const send = require("send");
const app = express();
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const products = require("./data/products");

app.get("/", (req, res) => {
  res.json({
    message: "the api is working",
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.filter(
    (product) => product._id === req.params.id
  )[0];

  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${process.env.PORT} `));
