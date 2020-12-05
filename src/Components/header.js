import React, { Component } from "react";
import './login.css'
import Login from './login';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, Route}from 'react-router-dom'


export default class Header extends Component{
render()
{ 
    return(
<div className="Header">
  
    
<nav className="navbar navbar-expand-sm bg-dark">

<a className="navbar-brand" href="#">WebSiteName</a>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
    <span className="navbar-toggler-icon"></span>
  </button>

    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Page 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Page 2</a>
      </li>
    </ul>
    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#"><span class="fas fa-user"></span> Sign Up</a>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" href="/ListTodoComponent"><span className="fas fa-sign-in-alt"></span> Login</Link>
      </li>
    </ul>

  </nav>
  </div>

    

);

}


}