/* export default and export name of single line write  with use var or class first type 2-27 line after 29-52 line*/
// import React, { Component } from "react"
// var name="Adil"
// var arr=[10,20,30,40,50,60,70,80,90,100]
// var emp={
//     id:1001,
//     Name:"Adil",
//     dsg:"Developer",
//     salary:80000,
//     city:"Prayagraj",
//     state:"Uttar Pradesh"
// }
// function display(){
//     return <h3>In this display function..!!</h3>
// }
// class ExprtImprtExmple extends Component{
//     render(){
//         return(
//             <>
//             <h2>This is the ExportImportExampple Component..!!</h2>
//             <h2>ExportImportExample code....!!!!!!!</h2>
//             </>
//         )
//     }
// }
// export default ExprtImprtExmple             //default export 
// export {name,arr,emp,display}               // export name

import React, { Component } from "react"
export var name="Adil Web Developer"
export var arr=[10,20,30,40,50,60,70,80,90,100]
export var emp={
    id:["DUCAT-ID",21168],
    Name:"Adil",
    dsg:"Developer",
    salary:80000,
    city:"Prayagraj",
    state:"Uttar Pradesh"
}
export function display(){
    return <h3>In this display function..!!</h3>
}
export default class ExprtImprtExmple extends Component{
    render(){
        return(
            <>
            <h2>This is the ExportImportExampple Component..!!</h2>
            <h2>ExportImportExample code....!!!!!!!</h2>
            <p>This is the export and export default with the single line var,class,function.!!</p>
            </>
        )
    }
}

/*
import ExprtImprtExmple from "./FunctionalComponents/ExportImportExample"
import React, { Component } from "react"
export var name="Adil Web Developer"
export var arr=[10,20,30,40,50,60,70,80,90,100]
export var emp={
    id:["DUCAT-ID",21168],
    Name:"Adil",
    dsg:"Developer",
    salary:80000,
    city:"Prayagraj",
    state:"Uttar Pradesh"
}
export function display(){
    return <h3>In this display function..!!</h3>
}
export default function ExprtImprtExmple(){
    render(){
        return(
            <>
            <h2>This is the ExportImportExampple Component..!!</h2>
            <h2>ExportImportExample code....!!!!!!!</h2>
            <p>This is the export and export default with the single line var,class,function.!!</p>
            </>
        )
    }
}
    */