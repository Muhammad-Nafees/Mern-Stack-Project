const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
})
userSchema.methods.generateAuthToken = async function () {

}

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

const Modeluser = mongoose.model("MernAuthdb", userSchema)

module.exports = Modeluser;
