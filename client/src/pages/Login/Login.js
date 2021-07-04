import React from 'react'
import "./Login.css";
import Axios from 'axios';
import {useState} from 'react';


function Login({currentUser}) {

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');


    const loginUser = () => {
        Axios.post('http://localhost:3001/api/login', {
            userName: userName,
            pass: pass
        }).then(() => {
            currentUser = true;
            alert("Successfully Logged In!");
        })
    }


    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="LoginForm">
                <input type="text" placeholder="Username" onChange={(e) => {
                    setUserName((e.target.value));
                }}/>
                <input type="text" placeholder="Password" onChange={(e) => {
                    setPass((e.target.value));
                }}/>
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    )
}

export default Login
