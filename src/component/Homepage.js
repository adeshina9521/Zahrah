import React from "react";
// import {Link} from "react-router-dom"

export default function Homepage(){

    return(
        <>
           <div className="container">
           
             <video src="../images/clip.mp4" autoPlay={true} loop={true}></video>
             <div className="cont-1">
                <div className="con-2">
                    <h1 className="brand_name">Zahrah Muslimah Hub </h1> 
                    <h5 className="product">We sell Hijab, Jilbaab, Niqabs, Islamic Books, Bags, Shoes, Jewelries</h5>      
                    <p className="brief">... modesty, beauty to cover certain areas of the human body so it is not exposed to everyone</p>
                </div>
            </div>
         </div>   
        </>
    )
}