import React, { useState, useTransition } from 'react'

export default function UseTransitionHookExample() {
    let [name, setName] = useState("Adil")
    let [input, setInput] = useState("")
    let [isPadding, startTransition] = useTransition()
    function Task() {
        let p1 = new Promise((res, rej) => {
            setTimeout(() => {
                res(true)// not found response then alert box active and value not change
                //rej(false)
            }, 1000)
        })
        return p1
    }
    async function postData() {
        setName(input)
        startTransition(async () => {
            try {
                await Task()
            }
            catch (error) {
                alert("Interval Server Error")
                setName("Adil")
            }
        })
    }
    return (
        <>
            <h1>This is UseTransition Hook Example</h1>
            <h3>Name:{name}</h3>
            <input type="text" name="name" onChange={(e) => setInput(e.target.value)} placeholder='Full Name' />
            <br />
            <button onClick={postData} disabled={isPadding}>Submit</button>
        </>
    )
}
