import * as Type from '../action/type'   
import Axios from 'axios';


const   register=user=>dispatch=>{
    Axios.post('/register', user)
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}


export default register