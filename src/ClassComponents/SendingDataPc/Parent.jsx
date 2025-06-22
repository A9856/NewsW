import React,{Component} from "react"
import Child from "./Child"
export default class Parent extends Component{
    constructor(){
        super()
        this.name="Adil Web Developer"
        this.data=[
            { id:101, name: "Adil", dsg: "Developer", salary: 15000, city: "Prayagraj", state: "UP" },
            { id:102, name: "Ankit", dsg: "Developer", salary: 15000, city: "Jaunpur", state: "UP" },
            { id:103, name: "Manoj", dsg: "Developer", salary: 15000, city: "Badlapurj", state: "UP" },
            { id:104, name: "Suraj", dsg: "Developer", salary: 15000, city: "Gazipur", state: "UP" },
            { id:105, name: "Puneet", dsg: "Developer", salary: 15000, city: "Shahganj", state: "UP" }
        ]
    }
    render(){
        return(
            <>
            <h1>Class Component Example</h1>
            <h2>Sending Data From Parent to Child Component</h2>
            <h3>This is Parent Component</h3>
            <hr/>
            <Child name={this.name}data={this.data} messge="This massage is send from parent"/>
            </>
        )
    }
} 