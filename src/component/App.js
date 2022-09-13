import React from "react"
// import SignUp from "./SignUp"
import SignIn from "./SignIn" 
import Header from "./Header"
import Homepage from "./Homepage"
import {Route, Switch} from "react-router-dom"
// import Menu from "./Menu"

export default function App(){
    
    return (

        <>
           <Header/>
           <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/signin" exact component={SignIn} />
           </Switch>
                      
        </>

    )
}