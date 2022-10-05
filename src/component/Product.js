import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import ProductHeader from "./ProductHeader"
// import Hijab from "./Hijab"


export default function Product(){
    const activeStyle = {color: "white", backgroundColor: "#44007e", borderRadius: 20,  fontSize: 18, paddingLeft: 3, paddingRight: 3, paddingTop: 3, paddingBottom: 3 }
   
    const [proMenu, setProMenu] = React.useState({
        isShown: true,
        productMenu : [<NavLink activeStyle={activeStyle} to="/hijabs">Hijabs</NavLink>, <NavLink activeStyle={activeStyle} to="/jibabs">Jilbabs</NavLink>, <NavLink activeStyle={activeStyle} to="/niqabs">Niqabs</NavLink>, <NavLink activeStyle={activeStyle} to="/islamicbook">Islamic Books</NavLink>, <NavLink activeStyle={activeStyle} to="/bags">Bags</NavLink>, <NavLink activeStyle={activeStyle} to="/shoes">Shoes</NavLink>, <NavLink activeStyle={activeStyle} to="/jewelries">Jewelries</NavLink>],
    })

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    let proMenuIcon = proMenu.isShown? "menu_logo.png" : "menu_close_logo.png"


   

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
    
    const proMobileMenu = proMenu.productMenu.map(
        function productsMenu(productsMenu){
            return (
                <ul  className="mob-dsk">
                    <ol className="mob-lst">
                        {productsMenu}
                    </ol>
                </ul>
            )

        }
    ) 
    
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
        <>
            <ProductHeader 
                proMenu={proMenu}
                productsMenu={productsMenu}
                proMenuIcon={proMenuIcon}
                screenWidth={screenWidth} 
                proMenuClick={proMenuClick}
                proMobileMenu={proMobileMenu}
                style={style}
            /> 
            {/* <Hijab/> */}


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
           
        
        </>
    )
}