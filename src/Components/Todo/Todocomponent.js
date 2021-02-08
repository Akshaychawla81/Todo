import React ,{Component } from "react";    
import moment from 'moment'
import { Form , Col, Row,Button,Alert} from "react-bootstrap";
import TodoService from "../../API/TODO/TodoService";
import AuthenticationService from './AuthenticationService';
import { Event } from "@material-ui/icons";


class Todocomponent extends Component{
    
constructor(props)
{

    super(props)

    this.state={

        id: ' ',
        description : '' ,
        targetdate :moment(new Date()).format("DD-MM-YYYY"),
        Successsfull:false  ,
        done : ''



    }
    
    this.onsubmit=this.onsubmit.bind(this)
}
onsubmit(values){
  let userName = AuthenticationService.Getusername();
  

  let todo ={"description":this.state.description,"tagetdate":this.state.targetdate,"id":this.state.id, done:this.state.done}


  if(this.state.id===-1){
    TodoService.AddTodoService(userName,todo)
    .then(() =>this.setState({ Successsfull:true }))
    
  }
  else
  {
 TodoService.UpdateTodoService(userName,this.state.id, todo )
 .then(() =>this.setState({ Successsfull:true })
 ,
 Response =>alert(Response))
  }




}



componentDidMount(){

  let userName = AuthenticationService.Getusername();
  let ID = this.props.match.params.id;
  console.log(userName);

  if(ID!=-1){
  TodoService.GetTodoID(userName,ID)
  .then(response => {

    
    this.setState({
      id:ID,
      description :response.data.description, 
      targetdate : moment(response.data.tagetdate).format("YYYY-MM-DD"),
      done : response.data.done
    })
  })
}}
render()    { 

    return (
<>

 {this.state.Successsfull &&<Alert variant='success'>Successfully submitted</Alert>

 }
<Form onSubmit={this.onsubmit}>
    <h2>TODO</h2>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
    < Form.Control        
            type="text"
           name="Description"  
        
            defaultValue={this.state.description} 
            onChange = {(event) => this.setState({description: event.target.value })}
        />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Target Date
    </Form.Label>
    <Col sm={10}>
     
    {/* {this.state.id==-1 &&<Form.Control   type="Date" name="targetdate"  onChange = {(event) => this.setState({targetdate: event.target.value })}   />}
     */}
    
    {this.state.id!=-1 && <Form.Control   type="Date" name="targetdate"  value={this.state.targetdate} onChange = {(event) => this.setState({targetdate: event.target.value })}/>}
    
    </Col>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  
   <Form.Check type="checkbox" label="Done"  onClick = {(event)=> this.setState({ done: event.target.checked })}/>
  
  </Form.Group>
  <Button variant="success"  type="submit">Save</Button>
</Form>    
</>);
}

}
export default  Todocomponent;