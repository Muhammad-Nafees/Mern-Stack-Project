import mongoose from "mongoose";

const DbConnection=async()=>{
    const MONGO_URI=`mongodb://user:mongopwd@ac-u3fiow1-shard-00-00.sydq08l.mongodb.net:27017,ac-u3fiow1-shard-00-01.sydq08l.mongodb.net:27017,ac-u3fiow1-shard-00-02.sydq08l.mongodb.net:27017/?ssl=true&replicaSet=atlas-mge2d0-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
      await  mongoose.connect(MONGO_URI,{useNewUrlParser:true})
        console.log("MongoDb Connection Suucessfully")
    }
    catch(error){
            console.error("Error While Conection With the Database ",error.message)
    }
}
export default DbConnection;