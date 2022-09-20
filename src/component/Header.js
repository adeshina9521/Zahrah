import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import MainHeader from "./MainHeader"


export default function Header(){

   const activeStyle = {color: "white", backgroundColor: "#44007e", borderRadius: 20,  fontSize:20, paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5 }

    const [myMenu, setMyMenu] = React.useState({
        isShown: true,
        menu : [ <NavLink  to="/">Home</NavLink>, <NavLink activeStyle={activeStyle} to="/product">Product</NavLink>, <NavLink activeStyle={activeStyle} to="/about">About</NavLink>, <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>],
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
            {/* <ProductHeader 
                proMenu={proMenu}
                productsMenu={productsMenu}
                proMenuIcon={proMenuIcon}
                screenWidth={screenWidth} 
                proMenuClick={proMenuClick}
                proMobileMenu={proMobileMenu}
                style={style}
            /> */}
            {/* <nav className="header">
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
                        
           
            */}
           {/* <h2>hiee{window.innerWidth}</h2> */}
           
        </div>
    )
}