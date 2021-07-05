import React from 'react'
import "./Login.css";
import Axios from 'axios';
import {useState} from 'react';
import { useHistory } from 'react-router';


function Login() {

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const history = useHistory();
    let userID = null;


    const loginUser = () => {
        Axios.post('http://localhost:3001/api/login', {
            userName: userName,
            pass: pass
        }).then((response) => {
            // curState(true);
            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else{
                userID = response;
                history.push('/');
                
                // setLoginStatus(response.data[0].user_name);
            }
            console.log(response);
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
                <h1>{loginStatus}</h1>
            </div>
            
        </div>
    )
}

export default Login
