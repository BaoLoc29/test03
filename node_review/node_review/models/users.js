import mongoose from "mongoose"

const Users = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true });
export default mongoose.model("users", Users);