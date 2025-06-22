
/*  1 Type 06-02-2025
import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(){
        super()
        this.state={
            Value:1
        }
    }
  render() {
    return (
      <>
            <h3>This is Increament and Decreament</h3>
            <h3>Value={this.state.Value}</h3>
            <button onClick={()=>this.state.Value>1?this.setState({Value:this.state.Value-1}):null}>Decreament</button>
            <button onClick={()=>this.setState({Value:this.state.Value+1})}>Increament</button>
      </>
    )
  }
}
*/


 
import React, { Component } from 'react'
export default class StateExample extends Component {
  constructor(){
    super()
    this.state={
      num:1
    }
  }
  decrement(){
    if(this.state.num>1)
    this.setState({num:this.state.num-1})
  }
  increment(){
   
    this.setState({num:this.state.num+1})
  }
  render() {
    return (
      <>
      <h3>num={this.state.num}</h3>
      <button onClick={()=>this.decrement()}>Decremet</button>
      <button onClick={()=>this.increment()}>Incremet</button>
      </>
    )
  }
}
  


// import React, { Component } from 'react';

// export default class StateExample extends Component {
//     constructor() {
//         super();
//         this.state = {
//             num: 1
//         };
//     }

//     render() {
//         return (
//             <>
//                 <h3>Class Component inside StateExample</h3>
//                 <h3>num={this.state.num}</h3>
//                 <button 
//                     onClick={() => this.setState(prevState => ({
//                         num: prevState.num > 1 ? prevState.num - 1 : 1
//                     }))}
//                 >
//                     Decrement
//                 </button>
//                 <button 
//                     onClick={() => this.setState(prevState => ({
//                         num: prevState.num + 1
//                     }))}
//                 >
//                     Increment
//                 </button>
//             </>
//         );
//     }
// }