import React from 'react'
import { useSearchParams } from 'react-router'
export default function Contact() {
  let[searchParams,setSearchParams] = useSearchParams()
  let name=searchParams.get("name")
  let salary=searchParams.get("salary")
  let dsg=searchParams.get("dsg")
  return (
    <>
     <h1>This is the Contact Page</h1>
     {name?<h2>Name:{name}</h2>:null}
     {salary?<h2>Salary:{salary}</h2>:null}
     {dsg?<h2>Designation:{dsg}</h2>:null}
     {/* <img src="/Images/a.png"/> */}
    </>
  )
}
