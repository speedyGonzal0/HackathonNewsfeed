import {useState, useEffect} from 'react';
import "./Register.css"
import Axios from 'axios';

function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submitUser = () => {
        Axios.post('http://localhost:3001/api/register', {
            userName: userName,
            email: email,
            pass: pass
        }).then(() => {
            alert("Successfully Registered!");
        })
    }

    return (
        <div className="Register">
            <h1>Registration</h1>
            <div className="RegisterForm">
                <input type="text" placeholder="Username" onChange={(e) => {
                    setUserName((e.target.value));
                }}/>
                <input type="text" placeholder="Email" onChange={(e) => {
                    setEmail((e.target.value));
                }} />
                <input type="text" placeholder="Password" onChange={(e) => {
                    setPass((e.target.value));
                }}/>
                <button onClick={submitUser}>Register</button>
            </div>
        </div>
    )
}

export default Register
