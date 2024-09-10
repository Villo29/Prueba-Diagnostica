const Product = require("../models/productos");

exports.getAllProducts = async (req, res) => {
    try {
    const products = await Product.find({ stock: { $gt: 0 } });
    res.status(200).json(products);
    } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
    }
};

exports.getProductById = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    if (!product) {
    return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
    } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
    }
};