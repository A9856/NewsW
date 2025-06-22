import React from 'react'
import border from"../Assests/images/React3.webp"
export default function ImageEx() {
  return (
    <>
    <h1>Image Example Functional Component</h1>
    <img src={require("../Assests/images/React1.jpg")} width={333} height={400}alt=""/>
    <br/>
    <img src={border} width={333} height={400}alt=""/>
    <img src="/Images/b1.png" width={333}height={400}/>

    </>
  )
}
