import React, {Component} from 'react'
import {BrowserRouter,Link, Route} from 'react-router-dom'
import ListTodoComponent from './ListTodoComponent'
import Footer from '../LearningExam/Footer'
import Login from '../login'
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute'
import Welcome from './Welcome'
import Header from './Header'
import LogoutComponenet from './LogoutComponenet'
import Todocomponent from './Todocomponent'



export default  class Todo extends Component{
render()
{
    return(
        <div className="Todo"><BrowserRouter>
        <>  
        <Header></Header>
    {/* <Route  exact path="/welcome" component={Welcome}/> */}
      <Route  exact path="/login" component={Login}/>
      <AuthenticatedRoute  exact path="/ListTodo" component={ListTodoComponent}/>
      <AuthenticatedRoute   path="/Logout" component={LogoutComponenet}/>
      <AuthenticatedRoute   path="/welcome" component={Welcome}/>
      <AuthenticatedRoute   path="/Todo/:id" component={Todocomponent}/>
      
      
      
  
      <Footer></Footer>
      </>
      </BrowserRouter></div>
    );
}

}



 
