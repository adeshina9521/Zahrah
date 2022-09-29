import React from "react";
import Card from "./Card";
import HijabData from "../component/Product/HijabData"


export default function Cards(){
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
        <div className="cds">
            {hijabElement}       
        </div>
    )
}
