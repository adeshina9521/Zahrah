import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import MainHeader from "./MainHeader"
import ProductHeader from "./ProductHeader"

export default function Header(){
    const [myMenu, setMyMenu] = React.useState({
        isShown: true,
        menu : [ <NavLink to="/">Home</NavLink>, <NavLink to="/product">Product</NavLink>, <NavLink to="/about">About</NavLink>, <NavLink to="/contact">Contact</NavLink>],
    })
    const [proMenu, setProMenu] = React.useState({
        isShown: true,
        productMenu : [<NavLink to="/">Hijabs</NavLink>, <NavLink to="/jilbabs">Jilbabs</NavLink>, <NavLink to="/niqabs">Niqabs</NavLink>, <NavLink to="/islamicbook">islamicbooks</NavLink>, <NavLink to="/bags">Bags</NavLink>, <NavLink to="/shoes">Shoes</NavLink>, <NavLink to="/jewelries">Jewelries</NavLink>],
    })

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    let menuIcon = myMenu.isShown? "menu_logo.png" : "menu_close_logo.png"
    let proMenuIcon = proMenu.isShown? "menu_logo.png" : "menu_close_logo.png"


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

    const productsMenu = proMenu.productMenu.map(
        function productMenu(productMenu){
            return(
                <ul key={productMenu} className="menu-dsk">
                    <ol className="menu-lst">
                        {productMenu}
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
    const proMobileMenu = proMenu.productMenu.map(
        function menu(menu){
            return (
                <ul key={menu} className="mob-dsk">
                    <ol className="mob-lst ">
                        {productsMenu}
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
    function proMenuClick(){
        setProMenu(function(prevState){
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
            <ProductHeader 
                proMenu={proMenu}
                productsMenu={productsMenu}
                proMenuIcon={proMenuIcon}
                screenWidth={screenWidth} 
                proMenuClick={proMenuClick}
                proMobileMenu={proMobileMenu}
                style={style}
            />
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