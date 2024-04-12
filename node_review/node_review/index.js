import express from "express"
import cors from "cors"
import router from "./routes/index.js";
import dotenv from "dotenv"

import connectToDb from "./db.js"


const app = express();
app.use(express.json())
app.use(cors({
  origin : "*"
}))
dotenv.config()
app.use(router)

app.listen(4000, () => {
  console.log("App is running at 4000");
  connectToDb();
});