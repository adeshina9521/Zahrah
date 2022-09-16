import React from "react"
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


export default function MainHeader(props){
  
    return(
        <div>
            <nav className="header">
                <div className="header-left">
                    <img className="lg_img" src="../images/zah_logo.png" alt="company logo"></img>
                    <h1 className="brand_name">Zahrah Muslimah Hub </h1>
                </div>
                <div className="menu">
                    {props.screenWidth > 500? props.menu : <img className="menu-lg" src={`../images/${props.menuIcon}`} alt="menu" onClick={props.menuClick}></img>}
                     
                </div>
                
            </nav>
            <div className="menu-mobile">
                {!props.myMenu.isShown? props.mobileMenu  : <p style={props.style}></p>}
             </div>
                        
           
           
           {/* <h2>hiee{window.innerWidth}</h2> */}
        </div>
    )
}

