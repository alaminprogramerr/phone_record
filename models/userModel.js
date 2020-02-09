const mongoose=require ('mongoose')
const Schema=mongoose.Schema


const regSchema=new Schema({
    name:{
        type:String,
        required:String        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    isAproved:false
})

const businessModel=mongoose.model('businessModel', regSchema)
module.exports=businessModel
