import mongoose  from "mongoose";
// import model  from "mongoose";

const fileschema=new mongoose.Schema({

    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    downloadContent:{
        type:Number,
        required:true,
        default:0
    }
})

const File= mongoose.model("File_Sharing",fileschema)

export default File;