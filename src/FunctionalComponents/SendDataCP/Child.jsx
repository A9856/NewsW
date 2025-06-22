import React from 'react'

export default function Child({getData}) {
    let data=[
        { id:101, name: "Adil", dsg: "Developer", salary: 15000, city: "Prayagraj", state: "UP" },
        { id:102, name: "Ankit", dsg: "Developer", salary: 15000, city: "Jaunpur", state: "UP" },
        { id:103, name: "Manoj", dsg: "Developer", salary: 15000, city: "Badlapurj", state: "UP" },
        { id:104, name: "Suraj", dsg: "Developer", salary: 15000, city: "Gazipur", state: "UP" },
        { id:105, name: "Puneet", dsg: "Developer", salary: 15000, city: "Shahganj", state: "UP" }
    ]
    function sendData(){
        getData(data)
    }
  return (
    <>
    <h2>This is Child Component With Functional Component</h2>
    <button onClick={sendData}>SendData</button>
    </>
  )
}
