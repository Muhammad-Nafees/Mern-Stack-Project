const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT;
app.use(express.json())

require("./db/connect")

app.use(require("./router/auth"))

app.get("/", (req, res) => {
    res.send("Hello From Home")
})

app.get("/about", (req, res) => {
    res.send("Hello From about")
})

app.listen(PORT, () => {
    console.log(`Wellcome To The Mern Auth!Server is Running at Port no ${PORT}`)
});
