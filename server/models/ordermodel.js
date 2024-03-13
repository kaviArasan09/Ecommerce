import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    createdAt: Date
})
export default  mongoose.model('order',orderSchema)