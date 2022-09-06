import React from "react"


export default function Header(){
    const [myMenu, setMyMenu] = React.useState({
        isShown: true,
        menu : ["Home", "Product", "About", "Contact Us"],
        screenWidth : window.innerWidth
    })

    let menuIcon = myMenu.isShown? "menu_logo.png" : "menu_close_logo.png"

    const menu = myMenu.menu.map(
        function menu(menu){
            return <p>{menu}</p>
        }
    ) 
   
    function menuClick(){
        setMyMenu(function(prevState){
            return {...prevState,
                    isShown: !prevState.isShown,
                    menu: menu
                    
                }
            
        }

        )
    }

    const style = {
        display: "none"
    }
    return(
        <div>
            <nav className="header">
                <div className="header-left">
                    <img className="lg_img" src="../images/zah_logo.png" alt="company logo"></img>
                    <h1 className="brand_name">Zahrah Muslimah Hub </h1>
                </div>
                <div className="menu">
                    { window.innerWidth > 350? menu: <img className="menu-lg" src={`../images/${menuIcon}`} alt="menu" onClick={menuClick}></img>}
                     
                </div>
                
            </nav>
           <div>
             {!myMenu.isShown? myMenu.menu : <p style={style}></p>}
           </div>
           <h2>hiee{window.innerWidth}</h2>
        </div>
    )
}