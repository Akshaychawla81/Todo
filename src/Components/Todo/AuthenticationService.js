import { configure } from '@testing-library/react';
import Axios from 'axios';


class AuthenticationService{
     RegisterSuccessfully(Username,Password){
         console.log("pass1");
         sessionStorage.setItem('authenticatedUser',Username  )
         this.SetupAxiosinterceptors()
     }
     LogoutSuccessfully(Username,Password){
        console.log("pass2");
       
        
        sessionStorage.removeItem('authenticatedUser',Username)
}
 isUserlogin(){
let user = sessionStorage.getItem('authenticatedUser')
if(user=== null)
{
    return false; 
}
else return true;

 }


 Getusername(){
    let user = sessionStorage.getItem('authenticatedUser')
    if(user=== null)
    {
        return false; 
    }
    else return user;
}

SetupAxiosinterceptors(){

    Axios.interceptors.response.use((config) => {

    config.headers={
        'Authorization': {
            username: 'user',
            password: 'password'
          }
      }
    
    return config
    })
}
}
export default new AuthenticationService()