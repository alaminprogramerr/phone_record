import * as Type from '../action/type'

const init ={
    isAuthenticated:false,
    user:{}, 
    err:{}
}
 const  authReducer =(state=init , action)=>{
    switch (action.Type){
        case Type.SET_USER:{
            return{
                user:action.payload.user,
                err:{},
                isAuthenticated:Object.keys(action.payload.user).length!==0
            }
        }
        case Type.USERS_ERROR:{
            return{
                ...state,
                err:action.payload.err
            }
        }
        default: return state 
    }
}
export default  authReducer