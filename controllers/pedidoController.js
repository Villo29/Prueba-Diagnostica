const Order = require('../models/pedidos');
const Product = require('../models/productos');

exports.createOrder = async (req, res) => {
    const { customerName, customerEmail, products } = req.body;

    try {
    // Verificar stock
    const orderProducts = await Promise.all(
        products.map(async (p) => {
        const product = await Product.findById(p.productId);
        if (!product || product.stock < p.quantity) {
            throw new Error(`Producto ${product ? product.name : 'desconocido'} sin stock suficiente`);
        }
        return { productId: product._id, quantity: p.quantity, price: product.price };
        })
    );

    const totalAmount = orderProducts.reduce((sum, p) => sum + p.quantity * p.price, 0);

    const order = new Order({
        customerName,
        customerEmail,
        products: orderProducts,
        totalAmount
    });

    await order.save();

    // Actualizar el stock de los productos
    for (const p of orderProducts) {
        await Product.findByIdAndUpdate(p.productId, {
        $inc: { stock: -p.quantity }
        });
    }

    res.status(201).json({ message: 'Pedido realizado exitosamente', order });
    } catch (err) {
    res.status(500).json({ message: 'Error al realizar el pedido', error: err.message });
    }
};
