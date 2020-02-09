 
const businesseModel=require('../models/userModel')

const loginValidator=require('../validator/validattor')
module.exports={
    login(req, res){
        console.log('logining ')
        const {email , password}=req.body
        let validate = loginValidator .login({email, password})
        if(!validate.isValid){

            return res.status(400).json(validate.err)
        }
        
        businesseModel.findOne({email:req.body.email})
        .then(data=>{
            if(data){
                bcrypt.compare(req.body.password, data.password)
                .then(reesult=>{
                    if(!reesult){
                        res.status(404).json({massage:"Wrong password"})
                    }
                    if(reesult){
                        const token=jwt.sign({name:data.name, email:data.email, type:data.type, _id:data._id},'secret', {expiresIn:'4h'})
    
                        res.status(200).json({massage:"Loin successfull", token:token})
                    }
                })
            }else{
                res.status(400).json({massage:"User Not Found"})

            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err)
        })
    }
}