// import React from 'react'
// import Child5 from './Child5'

// export default function Child4() {
//   return (
//     <>
//     <h1>This is Child4 Component</h1>
//     <hr/>
//     <Child5/>
//     </>
//   )
// }
import React, { useContext } from 'react'
import Child5 from './Child5'
import { NumberContext } from './Parent'
export default function Child4() {
  let { state, dispatch } = useContext(NumberContext)
  return (
    <>
      <h3>This is Child4 Component</h3>
      <h3>Num1={state.num1}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment Num1</button>
      <button onClick={() => dispatch({ type: "DEC_NUM1" })}>decrement Num1</button>
      <h3>Num2={state.num2}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM2" })}>Increment Num2</button>
      <button onClick={() => dispatch({ type: "DEC_NUM2" })}>decrement Num2</button>
      <hr />
      <NumberContext.Provider value={{ state, dispatch }}>
        <Child5 />
      </NumberContext.Provider>


    </>
  )
}
