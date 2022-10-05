import React from "react";
import Card from "./Card";
import HijabData from "./Product/HijabData"
import Product from "./Product"


export default function Hijab(){
    const hijabElement = HijabData.map(
        function hijab(info){
            return(
               
                    <Card
                        key={info.id}
                        {...info}
                    />
                
                
            )
        }
    )
    return(
        <>
            <Product/>
            <div className="cds">
                {hijabElement}       
            </div>
        </>
    )
}
