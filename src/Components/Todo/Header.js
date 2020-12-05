import React, {Component} from 'react'
import {BrowserRouter,Link, Route} from 'react-router-dom'

import AuthenticationService from './AuthenticationService'
import { withRouter } from 'react-router';



class Header extends Component{
    render()
    {   
  
      const isUserLogin= AuthenticationService.isUserlogin();
      console.log(isUserLogin);
        return(
    <div className="Header">
      
        
    <nav className="navbar navbar-expand-sm bg-dark">
    
    <a className="navbar-brand" href="#">Todo App </a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
        <span className="navbar-toggler-icon"></span>
      </button>
    
        <ul className="navbar-nav">
          <li className="nav-item active">
            {isUserLogin && <Link className="nav-link" to="/Welcome">Home</Link>}
          </li>
          <li className="nav-item">
          {isUserLogin &&  <Link to='/Listtodo' className="nav-link" href="#">Todo List</Link>}
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
      
          <li >
            {!isUserLogin &&<Link  className="nav-link" to="/login"><span class="fas fa-sign-in-alt"></span> Login</Link>}
          </li>
      
          <li >
            {isUserLogin && <Link  className="nav-link" to="/Logout" onClick={AuthenticationService.LogoutSuccessfully}><span class="fas fa-sign-in-alt"></span> Logout</Link>}
          </li>
        </ul>
    
      </nav>
      </div>
    
        
    
    );
    
    }
    
    
    }
  
  
  
  
  export default withRouter(Header);