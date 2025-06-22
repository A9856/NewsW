import React, { useRef, useState } from 'react'

export default function UseRefExample() {
    let[name,setName]=useState("")
    let email=useRef("")
    function postData(){
        alert(`
            Name:${name}
            Email:${email.current}
            `)
    }
    console.log("Component is Render")
  return (
   <>
   <h1>This is USeRefExample Component</h1>
   <h3>Name:{name}</h3>
   <h3>Email:{email.current}</h3>
   <input type="text"name="name"onChange={(e)=>setName(e.target.value)} placeholder='File Name'/>
   <hr/>
   <input type="email"name="email"onChange={(e)=>email.current= e.target.value} placeholder='Email ID'/>
   <button onClick={postData}>Submit</button>

   </>
  )
}
