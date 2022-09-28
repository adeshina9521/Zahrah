import React from "react"

export default function Card(){
    return(
        <div className="main_card">
            <div className="card">
                <p className="trans"> SOLD </p>
                 <img src="../images/productsImages/hijab1.jpg" alt="hijab" className="hij_img"></img>
                 <div className="sub_card">
                     <p className="details">style</p>
                     <p className="details">color</p>
                     <p className="details">sleeve size </p>
                     <p className="details">amount</p>
                     <p className="details">buy</p>
                     
                </div>  
            </div>
            
        </div>
    )
}