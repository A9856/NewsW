/* 2 Types 1-19 line 1 first type after 2 type
import React from "react"
import ReactDOM from "react-dom/client"
import * as Data from "./ClassComponents/ExprtImprtExmple"
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
        <>
        <Data.default/>
        <h2>Name:                       {Data.name}</h2>
        <h2>Array:                      {Data.arr.join(",")}</h2>
        <h2>Employee-ID:                {Data.emp.id}</h2>
        <h2>Employee-Name:              {Data.emp.Name}</h2>
        <h2>Employee-Designation:       {Data.emp.dsg}</h2>
        <h2>Employee-Salary:            {Data.emp.salary}</h2>
        <h2>Employee-City:              {Data.emp.city}</h2>
        <h2>Employee-State:             {Data.emp.state}</h2>
        {Data.display()}
        </>
)*/

/* 4 Class Table create 
import React from "react"
import ReactDOM from "react-dom/client"
import ExprtImprtExmple,{name,arr,emp,display} from "./ClassComponents/ExprtImprtExmple"
import img1 from "./images/React.jpg"
import img2 from "./images/React1.jpg"
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
        <>
        <ExprtImprtExmple/>
        <hr/>
        <img src={img2}alt="placeholder"width="150"height="150"/>
        <hr/>
        <h2>Name:                       {name}</h2>
        <img src={img1}alt="placeholder"width="150"height="150"/>
        <hr/>
        <h2>Array:                      {arr.join(",")}</h2>
        <hr/>
        <h2>Employee-ID:                {emp.id.join(":___")}</h2>
        <hr/>
        <h2>Employee-Name:              {emp.Name}</h2>
        <hr/>
        <h2>Employee-Designation:       {emp.dsg}</h2>
        <hr/>
        <h2>Employee-Salary:            {emp.salary}</h2>
        <hr/>
        <h2>Employee-City:              {emp.city}</h2>
        <hr/>
        <h2>Employee-State:             {emp.state}</h2>
        <hr/>
        {display()}
        </>

)*/

/* 1-9  line 
import React from "react"
import ReactDOM from "react-dom/client"
import Test from "./ClassComponents/Test"
import TestF from "./FunctionalComponents/TestF"
import An from "./FunctionalComponents/TestF"
import img1 from "./images/React.jpg"
import img2 from "./images/React4.webp"
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
        <>
        <img src={img1} alt="Placeholder" width="50%"height="300"/>
        <br/>
        <hr/>
        <img src={img2} alt="Placeholder" width="50%"height="300"/>
        <Test/>
        <hr/>
        <TestF/>
        <hr/>
        <An/>
        </>
)*/
// root.render(
//         <h1>Hello World!!!</h1>        
// )

/* using array  multiple line code write */
// root.render(
//     [
//     <h1>Hello World!!!</h1>,
//     <h2>This is first code React-js</h2>
//     ]
// )

/* using div  */
// root.render(
//     <div>
//         <h1>Hello World!!!</h1>
//         <h2>This is first code React-js</h2>
//         <h3>Browser run command</h3>
//     </div>
// )

/* Using React */
// root.render(
//     <React.Fragment>
//         <h1>Hello World!!!</h1>
//         <h2>This is first code React-js</h2>
//         <h3>Browser support React-Fragment</h3>
//         </React.Fragment>
// )

/* React Fragment syntectic sugar boar night */
// root.render(
//     <>
//         <h1>Hello World!!!</h1>
//         <h2>This is first code React-js</h2>
//         <h3>Browser support React-Fragment</h3>
//         </>
// )

/* Table craete */
// import React from "react"
// import ReactDOM from "react-dom/client"
// import ArrayOfObjectsExample from "./ClassComponents/ArrayOfObjectsExample"
// import ArrayofObjectsF from "./FunctionalComponents/ArrayOfObjectsF"
// const root1=ReactDOM.createRoot(document.getElementById("root1"))
// root1.render(
//         <>
//         <ArrayOfObjectsExample/>
//         <ArrayofObjectsF/>
//         </>
// )

/* Parent Child Use */
// import React from "react"
// import ReactDOM from "react-dom/client"
// import Parent from "./ClassComponents/SendingDataPc/Parent"

// const root3=ReactDOM.createRoot(document.getElementById("root3"))
// root3.render(
//         <>
//       <Parent/>
//         </>
// )

/* 06-02-2025*/
import React from "react"
import ReactDOM from "react-dom/client"
//import Boot from "./FunctionalComponents/Boot"
//import UseActionExample from "./FunctionalComponents/HooksExample/UseAction/UseActionExample"
//import UseOptimisticExample from "./FunctionalComponents/HooksExample/UseOptimistic/UseOptimisticExample"
//import UseTransitionHookExample from "./FunctionalComponents/HooksExample/UseTransitionHookExample"
//import Parent from "./FunctionalComponents/HooksExample/ContextAPIExample/Parent"
//import UseMemoExample from "./FunctionalComponents/HooksExample/UseMemoExample"
//import UseEffectExample from "./FunctionalComponents/HooksExample/UseEffectExample"

//import Parent from "./FunctionalComponents/HooksExample/UseCallbackExample/Parent"
//import UseRefExample from "./FunctionalComponents/HooksExample/UseRefExample"
//import App from "./FunctionalComponents/RoutersExample/App"
//import Parent from "./ClassComponents/PureComponent/Parent"
import MaterialUIExample from "./FunctionalComponents/MaterialUIExample"
import { BrowserRouter } from "react-router"
// import BootStrap from "./FunctionalComponents/BootStrap"
//import Paragraph from "./FunctionalComponents/Paragraph"
//import InputF from "./ClassComponents/InputF"
//import "./Assests/Css/global.css"
// import InputFF from "./FunctionalComponents/InputFF"
//import Parent from "./FunctionalComponents/SendDataCP/Parent"
//import Parent from "./ClassComponents/SendingDataCP/Parent"
const root5 = ReactDOM.createRoot(document.getElementById("root5"))
root5.render(
        <>
                {/* <Parent/> 
      <Parent/> */}
                {/* <Parent/> */}
                {/* <InputF/> */}
                {/* <InputFF/>  */}
                {/* <BootStrap/> */}
                {/* <Boot/> */}
                {/* <Paragraph/> */}
                <BrowserRouter basename="/News/">
                 <MaterialUIExample/>
                </BrowserRouter>
               
                {/* <App/> */}
                {/* <Parent/> */}
                {/* <Parent/> */}
                {/* <UseRefExample/> */}
                {/* <UseMemoExample/> */}
                {/* <UseEffectExample/> */}
                {/* <Parent/> */}
                {/* <UseTransitionHookExample/>*/}
                {/* <UseOptimisticExample/> */}
                {/* <UseActionExample/> */}
        </>

)




// import React from "react"
// import ReactDOM from "react-dom/client"
// import StateExample from "./ClassComponents/StateExample"
// import StateExampleF from "./FunctionalComponents/StateExampleF"
// const root4=ReactDOM.createRoot(document.getElementById("root4"))
// root4.render(
//         <>
//         <StateExample/>
//         <hr/>
//         <StateExampleF/>
//         </>
//         )

/* 10-02-2025 */
// import React from "react"
// import ReactDOM from "react-dom/client"
// import ImageEx from "./FunctionalComponents/ImageEx"
// import CssExample from "./FunctionalComponents/CssExample"
// import "./Assests/Css/global.css"


// const root4 = ReactDOM.createRoot(document.getElementById("root4"))
// root4.render(
//         <>
//                 {/* <ImageEx /> */}
//                 <CssExample/>
//         </>
// )
