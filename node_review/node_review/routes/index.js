import express from "express";
import orderRouter from "./order.js"
import usersRouter from "./users.js"
import inventoryRouter from './inventory.js'

const router = express.Router()
router.use("/inventory", inventoryRouter)
router.use("/order", orderRouter)
router.use("/users", usersRouter)

export default router