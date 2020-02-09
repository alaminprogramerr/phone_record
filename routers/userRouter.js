const userRouter=require('express')()


const businessController=require('../controller/businessController')
const clientController=require('../controller/clientController')

const commonController  =require('../utility/commonController')
// common router


// business user
userRouter.post('/businessRegister',businessController.businessRegister)
userRouter.get('/allbusinessUser', businessController.allbusinessUser)
userRouter.get('/singleBusinessUser/:id', businessController.singleBusinessUser)
userRouter.post('/updateBusinessUser/:id', businessController.updateBusinessUser)
userRouter.get('/deleteBusinessUser/:id', businessController.deleteBusinessUser)
userRouter.post('/login', businessController.login)


// client 
userRouter.post('/createNewClient',clientController.createClient)
userRouter.post('/addstatus/:id', clientController.addStatusToFaultSearch)
userRouter.get('/getAllSearched', clientController.getAllSearched)
userRouter.get('/sentestimate/:id', clientController.sentestimate)
userRouter.get('/getAllEstimateSent', clientController.getAllEstimateSent)
userRouter.get('/doEstimateAccepted/:id', clientController.doEstimateAccepted)
userRouter.get('/doEstimateRefused/:id', clientController.doEstimateRefused)
userRouter.get ('/getAllInProgress', clientController.getAllInProgress)
userRouter.post ('/addStatusInProgress/:id', clientController.addStatusInProgress)
userRouter.get('/doDelivered/:id',clientController.doDeliverd )
userRouter.get('/getalldelivered',clientController.getDelivered )
userRouter.get('/doAccept/:id',clientController.doAccept )
userRouter.get('/getAccepted', clientController.getAccepted)
userRouter.get('/doRefused/:id', clientController.doRefused)
userRouter.get('/getRefused', clientController.getRefused)
userRouter.get('/getSingle/:id', clientController.getSingle)



module.exports=userRouter

