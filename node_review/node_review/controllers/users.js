import Users from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const tokenSecret = 'secret'

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.findOne({ username }).lean();
        if (!user) {
            return res.status(401).json({ error: "Người dùng không tồn tại" });
        }

        if (password !== user.password) {
            return res.status(401).json({ error: "Mật khẩu không chính xác" });
        }

        const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
        const { password: userPassword, ...returnUser } = user;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            user: returnUser,
            accessToken
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};