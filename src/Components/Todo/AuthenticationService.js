class AuthenticationService{
     RegisterSuccessfully(Username,Password){
         console.log("pass1");
         sessionStorage.setItem('authenticatedUser',Username  )
         
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
    else return user;}
}
export default new AuthenticationService()