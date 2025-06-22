

/* 06-02-2025

import React from 'react'
export default function Child(props) {
  return (
    <>
    <h2>This SendDataPC</h2>
    <h2>This is the SendDataPc Component</h2>
    <h3>Name: {props.name}</h3>
    <table border={2}cellPadding={10}cellSpacing={0}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>City</th>
                <th>State</th>
            </tr>               
        </thead>
        <tbody>
            {
                props.data.map((item)=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.dsg}</td>
                        <td>{item.salary}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </>
  )
}
*/