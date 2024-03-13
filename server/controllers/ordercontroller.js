import productmodel from "../models/productmodel";
import ordermodel from "../models/ordermodel";

export const createOrder = async (req, res, next) => {
    try {
        const cartItems = req.body;
        const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
        const status = 'pending';
        const order = await orderModel.create({ cartItems, amount, status })

        cartItems.forEach(async (item) => {
            const product = await productmodel.findById(item.product._id);
            product.stock = product.stock - item.qty;
            await product.save();
        })

        res.status(200).json(order)
    } catch (error) {
        console.log(error);
    }

}