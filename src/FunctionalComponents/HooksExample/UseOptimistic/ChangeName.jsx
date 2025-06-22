import React, { useOptimistic } from "react";

async function task(name) {
    let p = new Promise((res, rej) => {
        setTimeout(() => {
            if (name.length > 10)
                rej("Name Length Must be Greater Than or Equal to 10")
            else
                res(name)
        }, 2000)
    })
    try {
        await p
        return name
    } catch (error) {
        return error
    }
}
export default function ChangeName({ name, setName }) {
    let [optimisticName, setOptimisticName] = useOptimistic(name)
    async function postData(formData) {
        const newName = formData.get("name")
        setOptimisticName(newName)
        setName(await task(newName))
    }
    return (
        <>
            <form action={postData}>
                <h1>This is ChangeName</h1>
                <h2>Name:{optimisticName}</h2>
                <input type="text" name="name" placeholder="FullName" />
                <button type="submit" disabled={optimisticName !== name}>Submit</button>
            </form>
        </>
    )
} 