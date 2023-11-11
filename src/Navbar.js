import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const newStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
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