import React from "react"

import Header from "./Header"

// import Homepage from "./Homepage"
// import {Route, Switch} from "react-router-dom"
// import Product from "./Product"
// import About from "./About"
// import Contact from "./Contact"
import Card from "./Card"


export default function App(){
    
    return (

        <>
           <Header/>
           <Card/>
           {/* <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/product" exact component={Product} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
           </Switch> */}
                      
        </>

    )
}