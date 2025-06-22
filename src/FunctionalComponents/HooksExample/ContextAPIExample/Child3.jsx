// import React, { useContext } from 'react'
// import Child4 from './Child4'
// import { DesignationContext, NameContext, SalaryContext } from './Parent'

// export default function Child3() {
//     let name = useContext(NameContext)
//     let salary = useContext(SalaryContext)
//     let Designation = useContext(DesignationContext)
//     return (
//         <>
//             <h1>This is Child3 Component</h1>
//             <h3>Name:{name}</h3>
//             <h3>Salary:{salary}</h3>
//             <h3>Designation:{Designation}</h3>
//             <hr />
//             <Child4 />
//         </>
//     )
// // }
// import React, { useContext } from 'react'
// import Child4 from './Child4'
// import { DesignationContext, NameContext, SalaryContext } from './Parent'

// export default function Child3() {
//     let name = useContext(NameContext)
//     let salary = useContext(SalaryContext)
//     let Designation = useContext(DesignationContext)
//     return (
//         <>
//             <h1>This is Child3 Component</h1>
//             <h3>Name:{name}</h3>
//             <h3>Salary:{salary}</h3>
//             <h3>Designation:{Designation}</h3>
//             <hr />
//             <Child4 />
//         </>
//     )
// }
import React, { useContext } from 'react'
import Child4 from './Child4'
import { NumberContext } from './Parent'
export default function Child3() {
    let { state, dispatch } = useContext(NumberContext)
    return (
        <>
            <h3>This is Child3 Component</h3>
            <h3>Num1={state.num1}</h3>
            <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment Num1</button>
            <button onClick={() => dispatch({ type: "DEC_NUM1" })}>decrement Num1</button>
            <h3>Num2={state.num2}</h3>
            <button onClick={() => dispatch({ type: "INC_NUM2" })}>Increment Num2</button>
            <button onClick={() => dispatch({ type: "DEC_NUM2" })}>decrement Num2</button>
            <hr />
            <NumberContext.Provider value={{ state, dispatch }}>
                <Child4 />
            </NumberContext.Provider>


        </>
    )
}
