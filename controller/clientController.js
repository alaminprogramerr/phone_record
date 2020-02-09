const validator =require('../validator/validattor')
const clientModel =require('../models/clientModel')
const bcrypt =require('bcryptjs')
const mongoose =require('mongoose') 
const createClient=(req,res)=>{
    console.log(req.body)
    let {
         name, 
        address, 
        contactNumber,
        brand,
        color,
        type,
        IMEI,
        state,
        ID,
        faultName,
        faultDescription
    } = req.body

    let validate = validator.client({
        
        name, 
        address, 
        contactNumber,
        brand,
        color,
        type,
        IMEI,
        state,
        ID,
        faultName,
        faultDescription
    })
    
    if (!validate.isValid) {
        return res.status(400).json(validate.err)
    } 
    let clientObj  = { 
        
        name, 
        address, 
        contactNumber,
        brand,
        color,
        type,
        IMEI,
        state,
        ID,
        faultName,
        faultDescription,
        
        // progress life cycle
        
    faultSearch:true,
    faultSearchStatus:[],
    repaireStatus:[],
    estimateRefused:false,
    refusedDeliver:false,
    estimateRefused:false,
    estimatesent:false,
    estimateAccepted:false,
    repaireDone:false,
    delivered:false,
    bouncedDeliver:false,
    acceptedDeliver:false,
    repaireProgress:false,
    cretedAt:new Date().toDateString(),
    cycle:false
    }
    const newClient =new clientModel (clientObj)
    .save((err, clients)=>{
        if(err){
            return res.json({massage:"error ", err:err})
        }else {
            return res.status(200).json({massage:"Customer added successfull", clients:clients})
        }
    })
}

// addStatus
const addStatusToFaultSearch=(req, res)=>{
    console.log('adding status')
    
     clientModel.findOne({_id:req.params.id})
     .then(client=>{
         if(client){
            client.faultSearchStatus.push({status:req.body.status});
            client.save()
            .then(updated=>{
                res.status(200).json({massage:"Status added", updated})
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({massage:"server error"})
            })
        }else{
            res.status(400).json({massage:"Customer not found"})
        }
     })
     .catch(err=>{
         console.log(err)
         res.json({massage:'erroro'})
     })
 }
 const getAllSearched=(req, res)=>{
     clientModel.find()
     .then(clients=>{
         let searched=[]
         clients.forEach(single=>{
             if(single.faultSearch==true){
                 searched.push(single)
             }
         })
         res.status(200).json({searched:searched})
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({massage:"server error occurd"})
     })
 }
// sent estimate
const sentestimate=(req, res)=>{
     clientModel.findOne({_id:req.params.id})
     .then(client=>{
         if(client){
            client.faultSearch=null,
            client.estimatesent=true
            client.save()
            .then(updated=>{
                res.status(200).json({massage:"Estimate Sent ", updated})
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({massage:"server error"})
            })
        }else{
            res.status(400).json({massage:"transection not found"})
        }
     })
     .catch(err=>{
         console.log(err)
         res.json({massage:'erroro'})
     })
 }
 
 const getAllEstimateSent=(req, res)=>{
    clientModel.find()
    .then(clients=>{
        
        let searched=[]
        clients.forEach(single=>{
            if(single.estimatesent==true || single.estimatesent==null){
                searched.push(single)
            }
        })
        res.status(200).json({client:searched})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massages:"server error occure"})
    })
}
const doEstimateAccepted=(req, res)=>{
    clientModel.findOne({_id:req.params.id})
    .then(client=>{
        if(client){
           client.faultSearch=null,
           client.estimatesent=null,
           client.estimateAccepted= true
           client.repaireProgress=true
           client.save()
           .then(updated=>{
               res.status(200).json({massage:"done accepted Sent ", updated})
           })
           .catch(err=>{
               console.log(err)
               res.status(500).json({massage:"server error"})
           })
       }else{
           res.status(400).json({massage:"transection not found"})
       }
    })
    .catch(err=>{
        console.log(err)
        res.json({massage:'erroro'})
    })
}

const doEstimateRefused=(req, res)=>{
    clientModel.findOne({_id:req.params.id})
    .then(client=>{
        if(client){
           client.faultSearch=null,
           client.estimatesent=null,
           client.estimateRefused= true
           client.save()
           .then(updated=>{
               res.status(200).json({massage:"done refused Sent ", updated})
           })
           .catch(err=>{
               console.log(err)
               res.status(500).json({massage:"server error"})
           })
       }else{
           res.status(400).json({massage:"transection not found"})
       }
    })
    .catch(err=>{
        console.log(err)
        res.json({massage:'erroro'})
    })
}


const getAllInProgress=(req, res)=>{
    clientModel.find()
    .then(clients=>{
        let progress=[]
        clients.forEach(single=>{
            if(single.repaireProgress==true){
                progress.push(single)
            }
        })
        res.status(200).json({client:progress})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"server error occurd"})
    })
}





const addStatusInProgress=(req, res)=>{
    console.log('adding status')
    
     clientModel.findOne({_id:req.params.id})
     .then(client=>{
         if(client){
            client.repaireStatus.push({status:req.body.status});
            client.save()
            .then(updated=>{
                res.status(200).json({massage:"Status added to progress statss", updated})
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({massage:"server error"})
            })
        }else{
            res.status(400).json({massage:"Customer not found"})
        }
     })
     .catch(err=>{
         console.log(err)
         res.json({massage:'erroro'})
     })
 }
const doDeliverd=(req, res)=>{
    clientModel.findOne({_id:req.params.id})
    .then(client=>{
        if(client){
           client.repaireDone=null
           client.delivered=true
           client.save()
           .then(updated=>{
               res.status(200).json({massage:"done repaire ", updated})
           })
           .catch(err=>{
               console.log(err)
               res.status(500).json({massage:"server error"})
           })
       }else{
           res.status(400).json({massage:"transection not found"})
       }
    })
    .catch(err=>{
        console.log(err)
        res.json({massage:'erroro'})
    })
}





const getDelivered=(req, res)=>{
    clientModel.find()
    .then(clients=>{
        let deliverd=[]
        clients.forEach(single=>{
            if(single.delivered==true){
                deliverd.push(single)
            }
        })
        res.status(200).json({client:deliverd})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"server error occurd"})
    })
}



const doAccept=(req, res)=>{
    clientModel.findOne({_id:req.params.id})
    .then(client=>{
        if(client){
           client.repaireDone=null
           client.delivered=null
           client.acceptedDeliver=true
           client.refusedDeliver=false
           client.save()
           .then(updated=>{
               res.status(200).json({massage:"done repaire ", updated})
           })
           .catch(err=>{
               console.log(err)
               res.status(500).json({massage:"server error"})
           })
       }else{
           res.status(400).json({massage:"transection not found"})
       }
    })
    .catch(err=>{
        console.log(err)
        res.json({massage:'erroro'})
    })
}





const getAccepted=(req, res)=>{
    clientModel.find()
    .then(clients=>{
        let accepted=[]
        clients.forEach(single=>{
            if(single.acceptedDeliver==true){
                accepted.push(single)
            }
        })
        res.status(200).json({client:accepted})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"server error occurd"})
    })
}





const doRefused=(req, res)=>{
    clientModel.findOne({_id:req.params.id})
    .then(client=>{
        if(client){
           client.repaireDone=null
           client.delivered=null
           client.acceptedDeliver=false,
           client.faultSearch=true
           client.cycle=true
           client.refusedDeliver=true
           client.save()
           .then(updated=>{
               res.status(200).json({massage:"refused repaire ", updated})
           })
           .catch(err=>{
               console.log(err)
               res.status(500).json({massage:"server error"})
           })
       }else{
           res.status(400).json({massage:"transection not found"})
       }
    })
    .catch(err=>{
        console.log(err)
        res.json({massage:'erroro'})
    })
}





const getRefused=(req, res)=>{
    clientModel.find()
    .then(clients=>{
        let refused=[]
        clients.forEach(single=>{
            if(single.refusedDeliver==true){
                refused.push(single)
            }
        })
        res.status(200).json({client:refused})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"server error occurd"})
    })
}






const getSingle=(req, res)=>{
    clientModel.findOne({_id:req.params.id})
    .then(clients=>{
        res.status(200).json({client:clients})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({massage:"server error occurd"})
    })
}







 
module.exports={
    createClient:createClient,
    addStatusToFaultSearch:addStatusToFaultSearch,
    getAllSearched:getAllSearched,
    sentestimate:sentestimate,
    getAllEstimateSent:getAllEstimateSent,
    doEstimateAccepted:doEstimateAccepted,
    doEstimateRefused:doEstimateRefused,
    getAllInProgress:getAllInProgress,
    addStatusInProgress:addStatusInProgress,
    getDelivered:getDelivered,
    doDeliverd:doDeliverd,
    doAccept:doAccept,
    getAccepted:getAccepted,
    doRefused:doRefused,
    getRefused:getRefused,
    getSingle:getSingle
}


