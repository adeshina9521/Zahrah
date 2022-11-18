import React from "react"

import Header from "./Header"

import Homepage from "./Homepage"
import {Route, Switch} from "react-router-dom"
import Products from "./Products"
import About from "./About"
import Contact from "./Contact"
import Jilbabs from "./Jilbab"
import Hijab from "./Hijab"
import Niqab from "./Niqab"
import Islamicbook from "./IslamicBook"
import Bag from "./Bag"
import Jewelries from "./Jewelries"
import Shoe from "./Shoe"
import PageNotFound from "./PageNotFound"
// import Footer from "./Footer"


export default function App(){
    
    return (

        <>
            {/* <Header/> */}
           
           <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/products" exact component={Products} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/hijabs" exact component={Hijab} />
                <Route path="/jibabs" exact component={Jilbabs} />
                <Route path="/niqabs" exact component={Niqab} />
                <Route path="/islamicbook" exact component={Islamicbook} />
                <Route path="/bags" exact component={Bag} />
                <Route path="/shoes" exact component={Shoe} />
                <Route path="/jewelries" exact component={Jewelries} />

                <Route component={PageNotFound}/>
    
           </Switch>

           {/* <Footer/>            */}
        </>

    )
}