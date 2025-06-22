

/* 2 type method--- 1 method Button increment and decrement  */

// import React, { useState } from 'react'

// export default function StateExampleF() {
//     let [num,setNum]=useState(1)
//     function decrement(){
//         setNum(num-1)
//     }
//     function increment(){
//         setNum(num+1)
//     }
//   return (
//    <>
//    <h3>StateExampleFunction And FunctionComponents</h3>
//    <h3>num={num}</h3>
//    <button onClick={()=>decrement()}>Decrement</button>
//    <button onClick={()=>increment()}>Increment</button>
//    </>
//   )
// }

/* Second type method button increment decrement */

// import React, { useState } from 'react'

// export default function StateExampleF() {
//     let [num,setNum]=useState(1)        // num (num is state variable,and setNum state variable value update )
  
//   return (
//    <>
//    <h3>StateExampleFunction And FunctionComponents</h3>
//    <h3>num={num}</h3>
//    <button onClick={()=>num>1?setNum(num-1):null}>Decrement</button>
//    <button onClick={()=>setNum(num+1)}>Increment</button>
//    </>
//   )
// }