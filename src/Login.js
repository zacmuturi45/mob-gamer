import React from "react";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input 
                    type="text"
                    name="username"
                    placeholder="Enter firstname"
                    />
                </div>
                <div>
                    <input 
                    type="text"
                    name="username"
                    placeholder="Enter lastname"
                    />
                </div>
            </form>
        </div>
    )
}       

export default Login;