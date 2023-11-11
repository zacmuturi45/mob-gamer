import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const newStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "14px 26px 6px",
        background: "rgb(83, 132, 132",
        textDecoration: "none",
        color: "white",
        borderRadius: "4px",
        width: "10%",
        fontSize: "20px"
    };

        return (
            <div className="navlink">
                <NavLink
                    to="/"
                    exact
                    style={newStyles}
                    activeStyle={{
                        background: "darkblue",
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    exact
                    style={newStyles}
                    activeStyle={{
                        background: "darkblue",
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/login"
                    exact
                    style={newStyles}
                    activeStyle={{
                        background: "darkblue",
                    }}
                >
                    Login
                </NavLink>
            </div>
        );
    }


export default Navbar;