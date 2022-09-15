import React from "react"
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


export default function ProductHeader(props){
  
    // const [myMenu, setMyMenu] = React.useState({
    //     isShown: true,
    //     menu : [ <NavLink to="/">Home</NavLink>, <NavLink to="/product">Product</NavLink>, <NavLink to="/about">About</NavLink>, <NavLink to="/contact">Contact</NavLink>],
       
    // })
    // const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    // let menuIcon = myMenu.isShown? "menu_logo.png" : "menu_close_logo.png"

    // const menu = myMenu.menu.map(
    //     function menu(menu){
    //         return (
    //             <ul key={menu} className="menu-dsk">
    //                 <ol className="menu-lst">
    //                     {menu}
    //                 </ol>
    //             </ul>
    //         )
    //     }
    // ) 

   
    // const mobileMenu = myMenu.menu.map(
    //     function menu(menu){
    //         return (
    //             <ul key={menu} className="mob-dsk">
    //                 <ol className="mob-lst ">
    //                     {menu}
    //                 </ol><br/>
    //             </ul>
    //         )

    //     }
    // ) 

    // function menuClick(){
    //     setMyMenu(function(prevState){
    //         return {...prevState,
    //                 isShown: !prevState.isShown,
                    
    //     }
    // }
    //     )
    // }

    // const style = {
    //     display: "none"
    // }
    return(
        <div>
            <nav className="header">
                <div className="header-left">
                    <img className="lg_img" src="../images/zah_logo.png" alt="company logo"></img>
                    <h1 className="brand_name">Zahrah Muslimah Hub </h1>
                </div>
                <div className="menu">
                    {props.screenWidth > 600? props.productsMenu : <img className="menu-lg" src={`../images/${props.proMenuIcon}`} alt="menu" onClick={props.proMenuClick}></img>}
                     
                </div>
                
            </nav>
            <div className="menu-mobile">
                {!props.proMenu.isShown? props.proMobileMenu  : <p style={props.style}></p>}
             </div>
                        
           
           
           {/* <h2>hiee{window.innerWidth}</h2> */}
        </div>
    )
}

