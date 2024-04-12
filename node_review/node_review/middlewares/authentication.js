import jwt from 'jsonwebtoken';
import users from '../models/users.js';
const authentication = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization

        if (!bearerToken) {
            return res.status(401).json({
                message: "Bạn chưa đăng nhập"
            })
        }
        const token = bearerToken.split(" ")[1]
        const verify = jwt.verify(token, process.env.SECRET_KEY)

        if (!verify) {
            return res.status(401).json({
                message: "Bạn chưa đăng nhập"
            })
        }

        const userId = verify.id;

        const findUser = await users.findById(userId)

        if (!findUser) {
            return res.status(404).json({ message: "User không tồn tại" })
        }
        req.users = findUser
        next()

    } catch (error) {
        return res.status(500).json({ error })
    }
}

export default authentication