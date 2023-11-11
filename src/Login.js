import React from "react";

function Login() {
    return (
        <div className="login">
            <form className="form">
                <p style={{WebkitTextFillColor: "white", fontSize: "large"}}>Sign in here</p>
                <div>
                    <input 
                    className="input1"
                    type="text"
                    name="username"
                    placeholder="Enter firstname"
                    />
                </div>
                <div>
                    <input 
                    className="input2"
                    type="text"
                    name="username"
                    placeholder="Enter lastname"
                    />
                </div>
                <div>
                    <button className="button">Submit</button>
                </div>
                <div>
                    <input 
                    className="input3"
                    type="checkbox"
                    name="check"
                    />
                    <label for="check" style={{WebkitTextFillColor: "white"}} >Keep me Signed in</label>
                </div>
            </form>
        </div>
    )
}       

export default Login;