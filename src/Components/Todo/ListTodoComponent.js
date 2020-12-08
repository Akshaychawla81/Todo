import { Tooltip } from 'bootstrap'
import React,{Component} from 'react'
import TodoService from '../../API/TODO/TodoService'
import AuthenticationService from './AuthenticationService'
import  Todocomponent from  './Todocomponent'



export default class ListTodoComponent extends Component{
 
 
  constructor(props){
    super()
    this.state={
         todo: [
        //  {id: 1, description: "Playing",Done:"01-01-2010",TargetDate:"02-02-2010"},{id: 2, description: "Sleeping",Done:"01-01-2010",TargetDate:"02-02-2010"},{id: 3, description: "Reading",Done:"01-01-2010",TargetDate:"02-02-2010"}
      ],message: ''
    }
    
    this.Deletetodo=this.Deletetodo.bind(this);
    this.Updatetodo=this.Updatetodo.bind(this)
     } 

    componentDidMount(){

      let userName = AuthenticationService.Getusername();
      console.log(userName);
      TodoService.GetAllTodo(userName)
      .then(response => {

        console.log(response)
        this.setState({todo : response.data})
      })
    }
    Deletetodo(id){
      let userName = AuthenticationService.Getusername();
 
      TodoService.DeleteTdoService(userName,id)
      .then(response => {
        
        this.setState({message : `Deleted ${id}`})
        
        window.location.reload();
      })
     
    }

    Updatetodo(id){
 
      this.props.history.push(`/Todo/${id}`)
      // let userName = AuthenticationService.Getusername();
 
      // TodoService.DeleteTdoService(userName,id)
      // .then(response => {
        
      //   this.setState({message : `Deleted ${id}`})
        
      //   window.location.reload();
      // })
     
    }
        render()
         { 
             return(
                <div  className='Listtodo'>
                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                  <table className="table">
      <thead>
        <tr>
          
        <th scope="col">ID</th>
          <th scope="col">Description</th>
          
          <th scope="col">Target Date</th>
          
          <th scope="col">Done</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
           </tr>
      </thead>
      <tbody>
      {  this.state.todo.map(
          todo =>
          <tr  key={todo.id}>
      
      <td>{todo.id}</td>
          
          <td>{todo.description}</td>
          
          <td>{todo.tagetdate}</td>
          <td>{todo.done}</td>
          <td>    <button  className="btn btn-success" onClick={()=>this.Updatetodo(todo.id)}>
         Update 
        </button>
         </td>
          <td>    <button  className="btn btn-danger" onClick={()=>this.Deletetodo(todo.id)}>
           Delete 
        </button>
          </td>
            </tr>
      )
       } 
      
      </tbody>
    </table>
          </div>
             );
         }
     
     
     }
    