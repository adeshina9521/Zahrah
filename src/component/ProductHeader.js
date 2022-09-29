import React from "react"
// import  from "./Homepage"
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


export default function ProductHeader(props){
    return(
        <div>

            <nav className="header">
                
                <div className="header-left">
                    {/* <img className="lg_img" src="../images/zah_logo.png" alt="company logo"></img>
                    <h1 className="brand_name">Zahrah Muslimah Hub </h1> */}
                </div>
                <div className="menu">
               
                        {/* {props.screenWidth < 600? props.productsMenu : <img className="menu-sm" src={`../images/${props.proMenuIcon}`} alt="menu" onClick={props.proMenuClick}></img>} */}
                        {props.productsMenu} 
                    
                    
                </div>
                
            </nav>
            <div className="menu-mobile">
                {!props.proMenu.isShown? props.proMobileMenu  : <p style={props.style}></p>}
             </div>
                        
       
           
           {/* <h2>hiee{window.innerWidth}</h2> */}
        </div>
    )
}

