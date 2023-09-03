const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const connectionDB = async () => {

    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDb Connected To The Backend")

    } catch (error) {
        console.log(error)

    }

}
connectionDB()
