import { Button } from "bootstrap";
import { error } from "jquery";
import React, { Component } from "react";
import { Link ,Route , BrowserRouter  } from "react-router-dom";
import HelloworldService from '../../API/TODO/HelloworldService'
import ListTodoComponent from './ListTodoComponent'

export default class Welcome extends Component{
   constructor(props){

    super(props)
    this.state= {welcomeMessage : ' ',ErrorMessage:''}
    this.RetrieveWelcomemessage= this.RetrieveWelcomemessage.bind(this);
    
this.Handleresponse =this.Handleresponse.bind(this)
this.Handleerror =this.Handleerror.bind(this)
   }
   
    RetrieveWelcomemessage(){
        HelloworldService.ExecutehelloworldServicen()
        .then(response => this.Handleresponse(response))
        .catch(error => this.Handleerror(error))
    }
Handleresponse(response){

    this.setState({welcomeMessage:response.data})
}
Handleerror(error){

    console.log(error.response)
    this.setState({ErrorMessage:error.response.data.message})
}
    render()
     {
 
         return(
           <> 
                <div className="Container-fluid" >

{this.state.ErrorMessage}

            
              </div>
            <div className="Container-fluid" >

Welcome to  our application     
<span>
    <button className="btn btn-success" onClick={this.RetrieveWelcomemessage}>   Click Here </button></span>
                  
                    </div>
                      <div className="Container-fluid" >

                            {this.state.welcomeMessage}
                    
                                        
                                          </div>
                                     
  </>                  
         )
     }
 
 
 }