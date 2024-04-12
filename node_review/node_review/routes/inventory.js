import express from "express"
import { getAllProductStock, getProductQuantityIsLow } from "../controllers/invetory.js"
import authentication from './../middlewares/authentication.js';

const router = express.Router()
router.get("/get-all-product-is-stock", authentication, getAllProductStock)
router.get("/get-product-quantity-is-low", authentication, getProductQuantityIsLow)

export default router