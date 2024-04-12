import mongoose from "mongoose"

const Inventory = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    instock: {
        type: Number,
        require: true
    }

}, { timestamps: true });
export default mongoose.model("inventory", Inventory);