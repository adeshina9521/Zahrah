import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import MainHeader from "./MainHeader"


export default function Header(){

   const activeStyle = {color: "white", backgroundColor: "#44007e", borderRadius: 20,  fontSize:20, paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5 }

    const [myMenu, setMyMenu] = React.useState({
        isShown: true,
        menu : [ <NavLink  to="/">Home</NavLink>, <NavLink activeStyle={activeStyle} to="/products">Products</NavLink>, <NavLink activeStyle={activeStyle} to="/about">About</NavLink>, <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>],
    })
   

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    let menuIcon = myMenu.isShown? "menu_logo.png" : "menu_close_logo.png"
  

    const menu = myMenu.menu.map(
        function menu(menu){
            return (
                <ul key={menu} className="menu-dsk">
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
                <ul key={menu} className="mob-dsk">
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
            <MainHeader 
               myMenu={myMenu}
               menuIcon={menuIcon}
               menu={menu} 
               screenWidth={screenWidth}   
               mobileMenu={mobileMenu} 
               menuClick={menuClick}   
               style={style}

            />
        </div>
    )
}