import React from "react"
// import SignUp from "./SignUp"
// import SignIn from "./SignIn" 
import Header from "./Header"
// import MainHeader from "./MainHeader"
import Homepage from "./Homepage"
import {Route, Switch} from "react-router-dom"
// import Menu from "./Menu"
import Product from "./Product"
import About from "./About"
import Contact from "./Contact"


export default function App(){
    
    return (

        <>
           <Header/>
           <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/product" exact component={Product} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
           </Switch>
                      
        </>

    )
}