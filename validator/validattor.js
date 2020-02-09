const validator=require('validator')
const registervalidator =(info)=>{
    
    const err={}
    if(!info.name){
        err.name="Name requird"
    }
    if(!info.email){
        err.email="Email requird"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password requird"
    } else if(info.password.length <6){
        err.password="Password Length should be gatter then 6 Charecter"
    }
    if(!info.confirmPassword){
        err.confirmPassword="Confirm Password requird"
    }else  if(info.confirmPassword !== info.password){
        err.confirmPassword="Both Password Are Different"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



const client=(info)=>{
    
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
    const err={}
    if(!info.brand){
        err.brand="Brand requird"
    }
    if(!info.color){
        err.color="color requird"
    }
    if(!info.type){
        err.type="Type requird"
    }
    if(!info.state){
        err.state="State requird"
    }
    if(!info.IMEI){
        err.IMEI="IMEI requird"
    }
    if(!info.ID){
        err.ID="ID requird"
    }
    if(!info.name){
        err.name="Client name requird"
    }
    if(!info.address){
        err.address="Address requird"
    }
    if(!info.contactNumber){
        err.contactNumber="Contact number requird"
    }
    if(!info.faultName){
        err.faultName="Fault name requird"
    }
    if(!info.faultDescription){
        err.faultDescription="Fault description requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



const loginValidator =(info)=>{
    
    let err={}
    if(!info.email){
        err.email="Email requird"
    } else if(!validator.default.isEmail(info.email)){
        err.email="Email Not Valid "
    }
    if(!info.password){
        err.password="Password requird"
    }
    return{
        err:err,
        isValid:Object.keys(err).length===0
    }
}



module.exports ={
    login:loginValidator,
    client:client,
    register:registervalidator
}