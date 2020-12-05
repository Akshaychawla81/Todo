import React ,{Component } from "react";    
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';



class Todocomponent extends Component{
    
constructor(props)
{

    super(props)

    this.state={

        id: this.props.id,
        despciption : 'Testing',
        targetdate : moment(new Date()).format('yyyy-mm-dd')


    }
}
render()    { 
    return (
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
      );
}

}
export default  Todocomponent;