import React, { useState } from 'react'
import ChangeName from './ChangeName'

export default function UseOptimisticExample() {
    let [name,setName]=useState("Adil")
  return (
    <>
    <h1>UseOptimisticName</h1>
    <hr/>
    <ChangeName name={name}setName={setName}/>
    </>
  )
}
