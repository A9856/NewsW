import React, { useState } from 'react'
import ChangeName from './ChangeName'

export default function UseActionExample() {
    let[name,setName]=useState("Adil")
  return (
   <>
   <h1>UseActionState Example</h1>
   <h2>Name:{name}</h2>
   <hr/>
   <ChangeName setName={setName}/>
   </>
  )
}
