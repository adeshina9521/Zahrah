import React from "react";

export default function SignUp(){
    return(
        <div className="sig-fm">
        <form className="signup">
           <div className="sgn-bg">
                <h1 className="sgn-hd">Sign Up</h1>
                <input 
                    id="username"
                    type="text" 
                    name="Username" 
                    className="sgn-input"
                    placeholder="Enter Username"
                />
                <br/>
                <label htmlFor="username">Username</label>
                <br/>
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
                    <p>I agree that all informaton is correct. Already register 
                        <a href="/">sign in</a>
                    </p>
                </div>
                <br/>
                <button>Sign Up</button>
            </div>
        </form>
        </div>
    )
}