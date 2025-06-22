import React, { Component } from 'react'
export default class Child extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.num1!==nextProps.num1
    }
        render() {
            console.log("Child Component is Render")
            return (
                <>
                    <h2>This is Child Component</h2>
                    <h3>num1={this.props.num1} num2={this.props.num2}</h3>
                </>
            )
        }
    }

// import React, {PureComponent } from 'react'

// export default class Child extends PureComponent{
//     // shouldComponentUpdate(){
//     //     return false
//     // } not use shouldComponentUpdate() only use PureComponent
//   render() {
//     console.log("Child Component is Render")
//     return (
//      <>
//      <h2>This is Child Component</h2>
//      </>
//     )
//   }
// }

