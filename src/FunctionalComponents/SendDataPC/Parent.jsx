import React from 'react'
import Child from "./Child"

export default function Parent() {
    let data=[
        { id: 101, name: "Mahi", dsg: "Developer", salary: 15000, city: "Prayagraj", state: "UP" },
        { id: 102, name: "Ankit", dsg: "Developer", salary: 15000, city: "Jaunpur", state: "UP" },
        { id: 103, name: "Manoj", dsg: "Developer", salary: 15000, city: "Badlapurj", state: "UP" },
        { id: 104, name: "Suraj", dsg: "Developer", salary: 15000, city: "Gazipur", state: "UP" },
        { id: 105, name: "Puneet", dsg: "Developer", salary: 15000, city: "Shahganj", state: "UP" }

    ]
  return (
    <>
    <h3>This is SendDataPC Parent</h3>
    <Child name="Adil Developer"data={data}/>
    </>
  )
}
