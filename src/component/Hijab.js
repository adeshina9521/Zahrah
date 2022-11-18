import React from "react";
import Card from "./Card";
import HijabData from "./Product/HijabData"
import Product from "./Product"
import Header from "./Header"
import Footer from  "./Footer"

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
            <Header/>
            <Product/>
            <div className="cds">
                {hijabElement}       
            </div>

            <Footer/>
        </>
    )
}
