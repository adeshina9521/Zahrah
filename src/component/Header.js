import React from "react"


export default function Header(){
    const [myMenu, setMyMenu] = React.useState({
        isShown: true,
        menu : ["Home", "Product", "About", "Contact"],
       
    })
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    let menuIcon = myMenu.isShown? "menu_logo.png" : "menu_close_logo.png"

    const menu = myMenu.menu.map(
        function menu(menu){
            return (
                <ul className="menu-dsk">
                    <ol className="menu-lst">
                        {menu}
                    </ol>
                </ul>
            )

        }
    ) 
    const mobileMenu = myMenu.menu.map(
        function menu(menu){
            return (
                <ul className="mob-dsk">
                    <ol className="mob-lst ">
                        {menu}
                    </ol><br/>
                </ul>
            )

        }
    ) 

    function menuClick(){
        setMyMenu(function(prevState){
            return {...prevState,
                    isShown: !prevState.isShown,
                    
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
                    {screenWidth > 500? menu : <img className="menu-lg" src={`../images/${menuIcon}`} alt="menu" onClick={menuClick}></img>}
                     
                </div>
                
            </nav>
            <div className="menu-mobile">
                {!myMenu.isShown? mobileMenu  : <p style={style}></p>}
             </div>
                        
           
           
           {/* <h2>hiee{window.innerWidth}</h2> */}
        </div>
    )
}