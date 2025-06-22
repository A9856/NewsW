import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            num1:1,
            num2:2
        }
    }
    increment1(){
        this.setState({num1:this.state.num1+1})
    }
    increment2(){
        this.setState({num2:this.state.num2+1})
    }
  render() {
    console.log("Parent Component is Rendered ")
    return (
        <>
        <h1> This is Parent Component</h1>
        <h3>num1:{this.state.num1}</h3>
        <h3>num2:{this.state.num2}</h3>
        <button onClick={()=>this.increment1()}>Increment Num1</button>
        <button onClick={()=>this.increment2()}>Increment Num2</button>
        <hr/>
        <hr/>
        <Child num1={this.state.num1} num2={this.state.num2}/>
        {/* <Child/> */}
        </>
      
    )
  }
}
