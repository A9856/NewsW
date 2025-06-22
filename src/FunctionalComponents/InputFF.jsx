// import React, { useState } from 'react'

// export default function InputFF() {
//     let [name,setName]=useState("")
//     function getInputData(e){
//         setName(e.target.value)
//     }
//     function postSubmit(){
//         alert(`
//                 Hello ${name}
//             `)
//     }
//   return (
//     <>
//         <div className="main">
//             <div className="center">
//                 <h1>This is Functional Component Input Form</h1>
//                 <h2>Name:{name}</h2>
//                 {/* <input type="text"name="name"onChange={(e)=>getInputData(e)}placeholder='Full Name'/> */}
//                 <input type="text"name="name"onChange={getInputData}placeholder='Full Name'/>
//                 {/* <button onClick={()=>postSubmit()}>Submit</button> */}
//                 <button onClick={postSubmit}>Submit</button>
//             </div>
//         </div>
//     </>

//   )
// }


// 2 type for multiple input  this is the first type

// import React, { useState } from 'react'
// export default function InputFF() {
//     let [name, setName] = useState({
//         name:"",
//         phone:"",
//         email:"",
//         designation:"",
//         number:"",
//         city:"",
//         state:""
//     })
//     function getInputData(e) {
//         let{name,value}=e.target
//         setName((prevData) => {
//             return {
//                 ...prevData,
//                 [name]: value
//             }
//         })
//     }

//     function postSubmit() {
//         alert(`
//             Name:         ${name.name}
//             Phone:        ${name.phone}
//             Email:        ${name.email}
//             Designation:  ${name.designation}
//             Salary:       ${name.number}
//             city:         ${name.city}
//             State:        ${name.state}
//             `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>This is Functional Component Input Form</h1>
//                     <h2>Name:{name.name}</h2>
//                     <h2>Phone:{name.phone}</h2>
//                     <h2>E-mail:{name.email}</h2>
//                     <h2>Desigantion:{name.designation}</h2>
//                     <h2>Salary:{name.number}</h2>
//                     <h2>City:{name.city}</h2>
//                     <h2>State:{name.state}</h2>
//                     {/* <input type="text"name="name"onChange={(e)=>getInputData(e)}placeholder='Full Name'/> */}
//                     <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
//                     <input type="number"name="phone"onChange={getInputData} placeholder='Phone'/>
//                     <input type="text"name="email"onChange={getInputData} placeholder='Email'/>
//                     <input type="text"name="designation"onChange={getInputData} placeholder='Designation'/>
//                     <input type="text"name="number"onChange={getInputData} placeholder='Salary'/>
//                     <input type="text"name="city"onChange={getInputData} placeholder='City'/>
//                     <input type="text"name="state"onChange={getInputData} placeholder='State'/>
//                     {/* <button onClick={()=>postSubmit()}>Submit</button> */}
//                     <button onClick={postSubmit}>Submit</button>
//                 </div>
//             </div>
//         </>

//     )
// }

// 2 type 
// import React, { useState } from 'react'
// export default function InputFF() {
//     let [name, setName] = useState("")
//     let [phone, setPhone] = useState("")
//     let [email, setEmail] = useState("")
//     let [designation, setDesignation] = useState("")
//     let [salary, setSalary] = useState("")
//     let [city, setCity] = useState("")
//     let [state, setState] = useState("")
//     function postSubmit() {
//         alert(`
//             Name:         ${name}
//             Phone:        ${phone}
//             Email:        ${email}
//             Designation:  ${designation}
//             Salary:       ${salary}
//             city:         ${city}
//             State:        ${state}
//             `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>This is Functional Component Input Form</h1>
//                     <h2>Name:{name}</h2>
//                     <h2>Phone:{phone}</h2>
//                     <h2>E-mail:{email}</h2>
//                     <h2>Desigantion:{designation}</h2>
//                     <h2>Salary:{salary}</h2>
//                     <h2>City:{city}</h2>
//                     <h2>State:{state}</h2>
//                     {/* <input type="text"name="name"onChange={(e)=>getInputData(e)}placeholder='Full Name'/> */}
//                     <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
//                     <input type="number" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
//                     <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
//                     <input type="text" name="designation" onChange={(e) => setDesignation(e.target.value)} placeholder='Designation' />
//                     <input type="text" name="salary" onChange={(e) => setSalary(e.target.value)} placeholder='Salary' />
//                     <input type="text" name="city" onChange={(e) => setCity(e.target.value)} placeholder='City' />
//                     <input type="text" name="state" onChange={(e) => setState(e.target.value)} placeholder='State' />
//                     {/* <button onClick={()=>postSubmit()}>Submit</button> */}
//                     <button onClick={postSubmit}>Submit</button>
//                 </div>
//             </div>
//         </>

//     )
// }


import React, { useState } from 'react'
export default function InputFF() {
    let [name, setName] = useState({
        name: "",
        phone: "",
        email: "",
        designation: "",
        number: "",
        city: "",
        state: ""
    })
    function getInputData(e) {
        let { name, value } = e.target
        setName((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function postSubmit(e) {
        e.preventDefault()
        alert(`
            Name:         ${name.name}
            Phone:        ${name.phone}
            Email:        ${name.email}
            Designation:  ${name.designation}
            Salary:       ${name.number}
            city:         ${name.city}
            State:        ${name.state}
            `)
    }
    return (
        <>
            <div className="main">
                <div className="center">
                    <h1>This is Functional Component Input Form</h1>
                    <h2>Name:{name.name}</h2>
                    <h2>Phone:{name.phone}</h2>
                    <h2>E-mail:{name.email}</h2>
                    <h2>Desigantion:{name.designation}</h2>
                    <h2>Salary:{name.number}</h2>
                    <h2>City:{name.city}</h2>
                    <h2>State:{name.state}</h2>
                    <form onSubmit={postSubmit}>
                        {/* <input type="text"name="name"onChange={(e)=>getInputData(e)}placeholder='Full Name'/> */}
                        <input type="text" name="name" required onChange={getInputData} placeholder='Full Name' />
                        <input type="number" name="phone" required onChange={getInputData} placeholder='Phone' />
                        <input type="text" name="email" required onChange={getInputData} placeholder='Email' />
                        <input type="text" name="designation" required onChange={getInputData} placeholder='Designation' />
                        <input type="text" name="number" required onChange={getInputData} placeholder='Salary' />
                        <input type="text" name="city" required onChange={getInputData} placeholder='City' />
                        <input type="text" name="state" required onChange={getInputData} placeholder='State' />
                        {/* <button onClick={()=>postSubmit()}>Submit</button> */}
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>

    )
}