import express from "express";
import router from "./Routes/Routes.js";
import DbConnection from "./Database/db.js";
import cors from "cors"

const app =express()
const PORT=8000;

app.use(cors())
app.use("/",router)


DbConnection()
app.listen(PORT,()=>console.log(`Express Is Running On ${PORT}`));
