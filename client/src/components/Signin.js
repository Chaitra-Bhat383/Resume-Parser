import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import MyImage from "./images/img1.svg"; 

const Signin = () => {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async(e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("invalid registration");
            console.log("invalid registration");
        } else {
            window.alert("Successful login");
            console.log("Successful login");

            history("/home");
        }
    }
    return ( <>
        <div >
        <div >
        <div className = "frame" > </div>   
        <h1 className = "Heading1" > SIGN IN </h1>  
        <img src = { MyImage }
        alt = "Image not available"
        className = "img1" />
        <form method = "POST" >
        <input type = "text"
        placeholder = "USERNAME"
        className = "username"
        name = "username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }/> 
        <input type = "password"
        placeholder = "PASSWORD"
        className = "password"
        name = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /> 
        <a href = "/home" > < button type = "submit"
        className = "Submit"
        onClick = { loginUser } > <span className = "signin" > SIGN IN </span></button > </a> 
        </form>  
        </div> 
        </div>
        </>
    )
}

export default Signin