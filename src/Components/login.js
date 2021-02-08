import React, { Component } from "react";
import './login.css'
import download from './download.png';
import {BrowserRouter} from 'react-router-dom'

import AuthenticationService from './Todo/AuthenticationService'
import Welcome from './Todo/Welcome'

import AuthenticatedRoute from './Todo/AuthenticatedRoute'






export default class Login extends Component{

    
    constructor(props)
    {
        super(props)
        this.state={
login : "Akshaychawla",
password : ''


        }
        this.handlechange = this.handlechange.bind(this)
        this.validatelogin = this.validatelogin.bind(this)
      
    }

    handlechange(event)
{

this.setState( {
       
        [event.target.name] : event.target.value
    })
 console.log(this.state.login)

}
validatelogin(){

   if(this.state.login==="Admin" && this.state.password==="admin"){
    AuthenticationService.RegisterSuccessfully(this.state.login,this.state.password);
            <BrowserRouter>
         <AuthenticatedRoute path="/welcome" component={Welcome}></AuthenticatedRoute>

    </BrowserRouter>
    this.props.history.push('/welcome') ;

    
   }
   else 
   alert("Incorrect login ID or Password ");

}

render()
{ 
    return(

<div className="wrapper fadeInDown">

  <div id="formContent">
    
    <div className="fadeIn first">
      <img src={download} id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" name="login"  value={this.state.login} onChange={this.handlechange}></input>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" value={this.state.password} onChange={this.handlechange}></input><br/>
      <button onClick={this.validatelogin} >Login</button>
    </form>
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>
    </div>
  </div>

    

);

}

    
}
