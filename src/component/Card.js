import React from "react"

export default function Card(props){

    let badgeText
    if(props.openSpots=== 0){
        badgeText= "SOLD OUT"
    }else badgeText = "ONLINE"
    return(
        <div className="main_card">
            <div className="card">
              { badgeText && <p className="trans">{badgeText}</p>}
                 <img src={props.image} alt="hijab" className="hij_img"></img>
                 <div className="sub_card">
                     <p className="details">style</p>
                     <p className="details">{props.color}</p>
                     <p className="details">sleeve size </p>
                     <p className="details">amount</p>
                     <p className="details">buy</p>
                     
                </div>  
            </div>
      </div>
      
    )
}