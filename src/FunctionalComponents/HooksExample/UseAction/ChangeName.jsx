import React, { useActionState } from "react";

async function task(name) {
    let p = new Promise((res, rej) => {
        setTimeout(() => {
            if (name.length < 10)
                rej(name)
            else
                res(name)
        }, 2000)
    })
    try {
        await p
        return false
    } catch (error) {
        return true
    }
}
export default function ChangeName({ setName }) {
    let [error, postData, isPadding] = useActionState(async (prevState, formData) => {
        error = await task(formData.get("name"))
        if (error) {
            error = "Name Length Must Be Greater Than or Equal To 10"
            return error
        }
        else {
            setName(formData.get("name"))
            return null
        }
    },
        null
    )
    return (
        <>
            <form action={postData}>
                <input type="text" name="name" placeholder="FullName" />
                <button type="submit" disabled={isPadding}>Submit</button>
            </form>
            {error ? <p>{error}</p> : null}
        </>
    )
}
