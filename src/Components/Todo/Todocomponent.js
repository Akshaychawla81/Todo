import React ,{Component } from "react";    
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import { Form , Col, Row,Button} from "react-bootstrap";



class Todocomponent extends Component{
    
constructor(props)
{

    super(props)

    this.state={

        id: '',
        despciption : this.props.despciption,
        targetdate : moment(new Date()).format('yyyy-mm-dd')


    }
}
render()    { 
    return (
<>
{console.log(this.state.despciption)}
<Form>
<Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      ID
    </Form.Label>
    <Col sm={10}>
    <Form.Control plaintext readOnly defaultValue={this.state.id} />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="input" value={this.state.despciption} placeholder="Description" />
    </Col>
  </Form.Group>
  <Button variant="success">Success</Button>
</Form>    
</> );
}

}
export default  Todocomponent;