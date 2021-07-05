import React from 'react'
import "./Navbar.css"
import TextField from '@material-ui/core/TextField';

function Navbar() {

    // const handleLogout = ()=>{
    //     setUser(false);
    // }

    const currentUser = false;


    return (
        <div className="Navbar">
            <div className="left">
            
            </div>

            <div className="center">
            <a href="/">Home</a>
            <a href="/write">Write</a>
            <a href="/settings">Settings</a>
            
            <a href="/">
                {currentUser && "Logout"}
            </a> 
            </div>

            <div className="right">
                {
                    currentUser ? (
                        <img src="https://img.thedailybeast.com/image/upload/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj.jpg" alt="" />
                    ) : (
                        <>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar