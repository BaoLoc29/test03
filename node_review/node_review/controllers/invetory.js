import inventory from "../models/inventory.js";

export const getAllProductStock = async (req, res) => {
  try {
    const product = await inventory.find()
    return res.status(200).json({ product })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
export const getProductQuantityIsLow = async (req, res) => {
  try {
    const product = await inventory.find({ instock: { $lt: 100 } })
    return res.status(200).json({ product })
  } catch (error) {
    return res.status(500).json({ error })
  }
};

