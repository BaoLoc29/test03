import mongoose from "mongoose"

const Order = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }

}, { timestamps: true });
export default mongoose.model("order", Order);