import React from "react"

import Header from "./Header"

import Homepage from "./Homepage"
import {Route, Switch} from "react-router-dom"
import Products from "./Products"
import About from "./About"
import Contact from "./Contact"
import Jilbabs from "./Jilbab"
// import Cards from "./Cards"
// import Card from "./Card"
import Hijab from "./Hijab"
export default function App(){
    
    return (

        <>
            <Header/>
           

           
           <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/products" exact component={Products} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/hijabs" exact component={Hijab} />
                <Route path="/jibabs" exact component={Jilbabs} />
    
                {/* <Route path="/hijab" exact component={Contact} /> */}
           </Switch>
                      
        </>

    )
}