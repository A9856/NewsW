// import React from 'react'
// import { DesignationContext, NameContext, SalaryContext } from './Parent'

// export default function Child5() {
//   return (
//     <>
//     <h1>This is Child5 Component</h1>
//     <NameContext.Consumer>
//         {(value)=>{
//             return <h3>Name:{value}</h3>
//         }}
//     </NameContext.Consumer>
//     <SalaryContext.Consumer>
//         {(value)=>{
//             return <h3>Salary:{value}</h3>
//         }}
//     </SalaryContext.Consumer>
//     <DesignationContext.Consumer>
//         {(value)=>{
//             return <h3>Designation :{value}</h3>
//         }}
//     </DesignationContext.Consumer>
//     <hr/>
//     </>
//   )
// }
// import React from 'react'
// import { DesignationContext, NameContext, SalaryContext } from './Parent'

// export default function Child5() {
//   return (
//     <>
//     <h1>This is Child5 Component</h1>
//     <NameContext.Consumer>
//         {(value)=>{
//             return <h3>Name:{value}</h3>
//         }}
//     </NameContext.Consumer>
//     <SalaryContext.Consumer>
//         {(value)=>{
//             return <h3>Salary:{value}</h3>
//         }}
//     </SalaryContext.Consumer>
//     <DesignationContext.Consumer>
//         {(value)=>{
//             return <h3>Designation :{value}</h3>
//         }}
//     </DesignationContext.Consumer>
//     <hr/>
//     </>
//   )
// }
import React, { useContext } from 'react'
import { NumberContext } from './Parent'
export default function Child5() {
    let { state, dispatch } = useContext(NumberContext)
    return (
        <>
            <h3>This is Child5 Component</h3>
            <h3>Num1={state.num1}</h3>
            <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment Num1</button>
            <button onClick={() => dispatch({ type: "DEC_NUM1" })}>decrement Num1</button>
            <h3>Num2={state.num2}</h3>
            <button onClick={() => dispatch({ type: "INC_NUM2" })}>Increment Num2</button>
            <button onClick={() => dispatch({ type: "DEC_NUM2" })}>decrement Num2</button>
            <NumberContext.Provider value={{ state, dispatch }}>

            </NumberContext.Provider>


        </>
    )
}
