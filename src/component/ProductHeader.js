import React from "react"


export default function ProductHeader(props){
    return(
        <div>

            <nav className="header">
                
                <div className="header-left">
                </div>
                <div className="menu">
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

