import React from "react"


export default function Header(){

    const [closeMenu, setCloseMenu] = React.useState(true)

    let menuIcon = closeMenu? "menu_logo.png" : "menu_close_logo.png"

    function handleClick(){
        setCloseMenu(function(prevState){
            return !prevState
        }

        )
    }
    return(

        <nav className="header">
            <div className="header-left">
                <img className="lg_img" src="../images/zah_logo.png" alt="company logo"></img>
                <h1 className="brand_name">Zahrah Muslimah Hub </h1>
            </div>
            <div className="menu">
               <img className="menu-lg" src={`../images/${menuIcon}`} alt="menu" onClick={handleClick}></img> 
            </div>
            
        </nav>
    )
}