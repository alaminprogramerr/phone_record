const mongoose=require('mongoose')
const Schema=mongoose.Schema

// phone_details:
//     Brand
//     color
//     type
//     imei
//     state
//     ID
// client details:
//     name
//     sure name
//     address
//     contact number 
    
// fault details :
//     name of fault 
//     descriptionof fault 
const clientSchema= new Schema({
    // phone description
    brand:String,
    color:String,
    type:String,
    IMEI:String,
    state:String,
    ID:String,
// client
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    // fault details
    faultName:String,
    faultDescription: String,
    
    // progress life cycle
    faultSearch:Boolean,
    faultSearchStatus:Array,
    repaireStatus:Array,
    repaireProgress:Boolean,
    estimatesent:Boolean,
    estimateRefused:Boolean,
    estimateAccepted:Boolean,
    repaireDone:Boolean,
    delivered:Boolean,
    bouncedDeliver:Boolean,
    acceptedDeliver:Boolean,
    refusedDeliver:Boolean,
    cretedAt:String,
    cycle:Boolean
})



const clientModel= mongoose.model('clientModel', clientSchema)
module.exports =clientModel