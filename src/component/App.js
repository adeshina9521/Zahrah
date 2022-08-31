import React from "react"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { Route } from "react-router-dom"

export default function App(){
    return(
        <>
            <SignUp/>
            <Route path="/signin" component={SignIn}/>
        </>

    )
}