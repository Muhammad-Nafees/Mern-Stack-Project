const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router();
const Modeluser = require("../db/model/Modeluser");
const bcrypt = require("bcryptjs")

router.post("/register", async (req, res) => {

   const { email, password } = req.body;

   console.log("ReqBody", req.body)

   if (!email || !password) {
      return res.status(422).json({ Error: "Please Filled the field Properly" })
   }

   const Userexist = await Modeluser.findOne({ email: email })

   if (Userexist) {
      return res.status(422).json({ Error: "Email Already Exist" })
   }

   const user = new Modeluser({ email, password })

   await user.save()

   return res.status(201).json({ message: "user Registered Successfully" })

})


router.post("/signin", async (req, res) => {

   try {

      const { email, password } = req.body

      if (!email || !password) {
         return res.status(404).json({ Error: "Please filled the field properly" })
      }

      const userLogin = await Modeluser.findOne({ email: email })
      // const passLogin = await Modeluser.findOne({ password: password })

      if (userLogin) {
         const isMatch = await bcrypt.compare(password, userLogin.password)

         if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials Match" })
         } else {
            res.json({ message: "user signin Successfully" })
         }
      } else {
         res.status(400).json({ error: "Invalid Credientials" })
      }

   }
   catch (err) {
      console.log(err)
   }

})
module.exports = router;
