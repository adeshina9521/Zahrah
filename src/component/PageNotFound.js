import React from "react"
import {Link} from "react-router-dom"

export default function PageNotFound(){
    return(
        <>
            <h1>Page Not Found</h1>
            <p>
                <Link to="/">Back to Home </Link>
            </p>
        </>
    )
}