import React, { Component } from 'react'
import './Counter.css'


export default class Counter extends Component
{
   
   constructor()
   {
super();
    this.state={
        Counter:0

        
    }
    this.inc = this.inc.bind(this)
    this.inc1 = this.inc1.bind(this)
    this.inc2 = this.inc2.bind(this)
    this.inc3 = this.inc3.bind(this)
    this.inc4 = this.inc4.bind(this)
    this.reset = this.reset.bind(this)
}
   
    render() {
    return(
     <div className="Counter">

        <button onClick={this.inc}>+1</button> <br></br>
        <button onClick={this.inc1}>+10</button><br></br>
        <button onClick={this.inc2}>+100</button><br></br>
        <button onClick={this.inc3}>+50</button><br></br>
        <button onClick={this.inc4}>+20</button><br></br>

        <span className="Count">{this.state.Counter}</span>
        <button onClick={this.reset}>Reset</button><br></br>
     </div>

)

 
}
 inc() {
    this.setState({ Counter : this.state.Counter +1 });
  
 }
 inc1() {
    this.setState({ Counter : this.state.Counter +10 });
  
 }
 inc2() {
    this.setState({ Counter : this.state.Counter +100 });
  
 }
 inc3() {
    this.setState({ Counter : this.state.Counter +50 });
  
 }
 inc4() {
    this.setState({ Counter : this.state.Counter +20 });
  
 }
 reset() {
    this.setState({ Counter : this.state.Counter *0 });
  
 }
}






