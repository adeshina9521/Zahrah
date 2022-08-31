import React from "react";


export default function SignIn(){
    return(
        <div className="sig-fm">
        <form className="signup">
           <div className="sgn-bg">
                <h1 className="sgn-hd">Sign in</h1>
                    <input 
                    id="email"
                    type="email" 
                    name="email" 
                    className="sgn-input"
                    placeholder="Enter Email"
                />
                <br/>
                <label htmlFor="email">Email</label>
                <br/>
                <input 
                    id="password"
                    type="password" 
                    name="password" 
                    className="sgn-input"
                    placeholder="Enter Password"
                />
                <br/>
                <label htmlFor="password">Password</label>
                <br/>

                <div className="sign-agree">
                    <input 
                        id="new"
                        type="checkbox" 
                        name="isNewUser"
                        className="ag-input" 
                    />
                </div>
                <br/>
                <button>Sign In</button>
            </div>
        </form>
        </div>
    )
}