import React, { Component } from 'react'
import Child from './Child'


export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.getData = this.getData.bind(this)
  }
  getData(input) {
    this.setState({ data: input })
  }
  render() {
    return (
      <>
        <h1>Class Component Example Senddata from Child to Parent component </h1>
        <h2>This is parent Component</h2>
        {
          this.state.data.length ?
        
        <table border={2} cellPadding={10} cellSpacing={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Desiganation</th>
              <th>Salary</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((item, index) => {
                return <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.dsg}</td>
                  <td>{item.salary}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                </tr>
              })
            }
          </tbody>

        </table>:null
  }
        <hr/>
      <Child getData={this.getData}/>
      </>
    )
  }
}
