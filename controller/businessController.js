const bcrypt =require('bcryptjs')
const mongoose =require('mongoose')
const validator=require('../validator/validattor')

const userModel=require('../models/userModel')

const jwt =require ('jsonwebtoken')

// create business user 
const businessRegister=(req, res)=>{
    const {
    name,
    email,
    password,
    confirmPassword
    }=req.body
    console.log('hello')
    
    const register=validator.register({ name,email,password,confirmPassword })
    console.log('hello')

    if(!register.isValid){
        return res.status(400).json({err:register.err})
    }
    else{
        userModel.findOne({email:email})
        .then(user=>{
            if(user){
                return res.status(400).json({massage:"User allready exist"})
            }
            if(!user){
                bcrypt.genSalt(10, function(err, salt) {
                    if(err){
                        return res.status(500).json({massage:"Server error occurd", err:err})
                    }
                    console.log('hello world')
                    bcrypt.hash(password, salt, function(err, hash) {
                        
                        if(err){
                            return res.status(500).json({massage:"Server error occurd while password hashing", err:err})
                        }else{
                            const newBusiness= new userModel({
                                name:req.body.name,
                                email:req.body.email,
                                password:hash,
                            })
                            .save()
                            .then(data=>{
                                return res.status(200).json({massage:"Register successfull !", data})
                            })
                            .catch(err=>{
                                console.log(err)
                                return res.status(500).json({massage:"Error occurd ", err:err})
                            })
                        }
                    });
                });
            }
        })
        .catch(err=>{
                return res.status(400).json({massage:"Error occure", err:err})
        })
    }
}

// get all business user 
const allbusinessUser=(req, res)=>{
    userModel.find({})
    .then(user=>{
        res.status(201).json({user:user})
    })
    .catch(err=>{
        return res.status({err:err})
    })
}
// get single business user 
const singleBusinessUser=(req, res)=>{
    const id=req.params.id
    userModel.findById(id, (err, user)=>{
        if(err){
            res.status(500).json({massage:"Server error occurd", err:err})
        }else{
            res.status(200).json({user:user})
        }
    })
}
// update businessuser 
const updateBusinessUser=(req, res)=>{
   let updateInfo={
        name:req.body.name,
        email:req.body.email,
        contactNumber:req.body.contactNumber,
    
    }
    userModel.findByIdAndUpdate(req.params.id, updateInfo,{new:true}, (err, updated)=>{
        if(err){
            return res.status(500).json({massage:"Error occurd", err:err})
        }
        else{
            res.status(202).json({massage:"Updated successfull !", updated:updated})
        }
    })
}
// delete business user 
const deleteBusinessUser=(req, res)=>{
    console.log("deleting")
      userModel.findByIdAndRemove(req.params.id, (error, data)=>{
        if(error){
            console.log("error in deleting yo!");
            res.json({error:error})
        }

            console.log("data all gone and deleted yo");
            res.status(200).json({massage:"Deleted successfull !", data});


    });
}
const login=(req, res)=>{

    const  loginValidate=validator.login(req.body)
    if(!loginValidate.isValid){
        res.status(400).json(loginValidate.err)
        return
    }else{
        userModel.findOne({email:req.body.email})
        .then(data=>{
            if(!data){
                res.status(400).json({massage:"User Not Found "})
                return
            }
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
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err)
        })
    }
}
module.exports={
    businessRegister:businessRegister,
    allbusinessUser:allbusinessUser,
    singleBusinessUser:singleBusinessUser,
    updateBusinessUser:updateBusinessUser,
    deleteBusinessUser:deleteBusinessUser,
    login:login
}