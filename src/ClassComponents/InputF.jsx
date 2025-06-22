// import React, { Component } from 'react'

// export default class InputF extends Component {
//     constructor(){
//         super()
//         this.state={
//             name:"",
//         }
//     }
//     getInputData(e){
//         this.setState({name:e.target.value})
//     }
//     postSubmit(){
//         alert(`
//             Hello ${this.state.name}
//             `)
//     }
//   render() {
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Class Component Input Form</h1>
//                     <h2>name:{this.state.name}</h2>
//                     <input type="text"name="name"onChange={(e)=>this.getInputData(e)} placeholder='Full Name'/>
//                     <button onClick={()=>this.postSubmit()}>Submit</button>
//                 </div>
//             </div>
//         </>
      
//     )
//   }
// }

/* Multiple Input Form */
import React, { Component } from 'react'

export default class InputF extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            phone:"",
            email:"",
            designation:"",
            number:"",
            city:"",
            state:""
        }
    }
    getInputData(e){
        let{name,value}=e.target
        this.setState(()=>{
            return {
                ...this.state,
                [name]:value
            }
        })
    }
    postSubmit(){
        alert(`
            Name:         ${this.state.name}
            Phone:        ${this.state.phone}
            Email:        ${this.state.email}
            Designation:  ${this.state.designation}
            Salary:       ${this.state.number}
            city:         ${this.state.city}
            State:        ${this.state.state}
            `)
    }
  render() {
    return (
        <>
            <div className="main">
                <div className="center">
                    <h1>Class Component Input Form</h1>
                    <h2>name:{this.state.name}</h2>
                    <h2>Phone:{this.state.phone}</h2>
                    <h2>E-mail:{this.state.email}</h2>
                    <h2>Desigantion:{this.state.designation}</h2>
                    <h2>Salary:{this.state.number}</h2>
                    <h2>City:{this.state.city}</h2>
                    <h2>State:{this.state.state}</h2>
                    <input type="text"name="name"onChange={(e)=>this.getInputData(e)} placeholder='Full Name'/>
                    <input type="text"name="phone"onChange={(e)=>this.getInputData(e)} placeholder='Phone'/>
                    <input type="text"name="email"onChange={(e)=>this.getInputData(e)} placeholder='Email'/>
                    <input type="text"name="designation"onChange={(e)=>this.getInputData(e)} placeholder='Designation'/>
                    <input type="text"name="number"onChange={(e)=>this.getInputData(e)} placeholder='Salary'/>
                    <input type="text"name="city"onChange={(e)=>this.getInputData(e)} placeholder='City'/>
                    <input type="text"name="state"onChange={(e)=>this.getInputData(e)} placeholder='State'/>

                    <button onClick={()=>this.postSubmit()}>Submit</button>
                </div>
            </div>
        </>
      
    )
  }
}