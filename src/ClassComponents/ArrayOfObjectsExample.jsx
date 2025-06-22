//  import React, { Component } from "react";
// export default class ArrayOfObjectsExample extends Component {
//     constructor() {
//         super()
//         this.data = [
           
//             { id:101, name: "Adil", dsg: "Developer", salary: 15000, city: "Prayagraj", state: "UP" },
//             { id:102, name: "Ankit", dsg: "Developer", salary: 15000, city: "Jaunpur", state: "UP" },
//             { id:103, name: "Manoj", dsg: "Developer", salary: 15000, city: "Badlapurj", state: "UP" },
//             { id:104, name: "Suraj", dsg: "Developer", salary: 15000, city: "Gazipur", state: "UP" },
//             { id:105, name: "Puneet", dsg: "Developer", salary: 15000, city: "Shahganj", state: "UP" }
//         ]
//     }
//     render() {
//         return (
//             <>
//                 <h1>Class Component Example</h1>
//                 <h2>ArrayOfObjectsExample</h2>
//                 <table border={2} cellPadding={10} cellSpacing={0}>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Designation</th>
//                             <th>Salary</th>
//                             <th>City</th>
//                             <th>State</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.data.map((item, index) => {
//                             return <tr key={index}>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.dsg}</td>
//                                 <td>{item.salary}</td>
//                                 <td>{item.city}</td>
//                                 <td>{item.state}</td>
//                             </tr>
//                         })
//                         }
//                     </tbody>
//                 </table>
//             </>

//         )
//     }
// } 