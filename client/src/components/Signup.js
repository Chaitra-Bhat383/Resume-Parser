import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import icon1 from "./images/icon1.jfif";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon2.png";
import MyImage from "./images/img2.svg"; { document.body.style = 'background: #457B9D' }

const Signup = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmpassword: ""
    });

    let username, value;
    const handleInputs = (e) => {
        console.log(e);
        username = e.target.name;
        value = e.target.value;

        setUser({...user, [username]: value });
    };

    const PostData = async(e) => {
        e.preventDefault();
        const { username, password, confirmpassword } = user;
        const res = await fetch("/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                confirmpassword
            })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("invalid registration");
            console.log("invalid registration");
        } else {
            window.alert("Successful registration");
            console.log("Successful registration");

            history("/signin");
        }
    }

    // const Signup = () => {
    //     //const history = useHistory();
    //     const [user, setUser] = useState({
    //         username:"",password:"",confirmpassword:""});

    //     let username,value;

    //     const handleInputs = (e) => {
    //         console.log(e);
    //         username = e.target.name;
    //         value = e.target.value;

    //         setUser({...setUser, [username]:value});

    //     }

    //    const PostData = async(e) => {
    //         e.preventDefault();

    //         const {username, password, confirmpassword} = user;

    //         const res = await fetch("/signup",{
    //             method:"POST",
    //             headers: {
    //                 "Content-Type" : "application/json"
    //             },
    //             body:JSON.stringify({
    //                 username, password, confirmpassword
    //             })
    //         })
    //         const data = await res.json();

    //         if(data.status === 422 || !data){
    //             window.alert("Invalid Registration");
    //             console.log("Invalid Registration");
    //         } else{
    //             window.alert("Registration Successful");
    //             console.log("Registration Successful");

    //             //history.pushState("/login");
    //         }
    //    } 


    return ( <>
        <div>
        <div className = "frame" > </div>    
        <h1 className = "Heading4" > SIGN UP </h1>   
        <img src = { MyImage }
        alt = "Image not available"
        className = "img2" />
        <img src = { icon1 }
        alt = "Image not available"
        className = "icon1" />
        <img src = { icon2 }
        alt = "Image not available"
        className = "icon2" />
        <img src = { icon3 }
        alt = "Image not available"
        className = "icon3" />
        <form method = "POST" >
        <input type = "text"
        name = "username"
        autocomplete="off"
        value = { user.username }
        onChange = { handleInputs }
        placeholder = "USERNAME"
        className = "username1" />
        <input type = "password"
        name = "password"
        autocomplete="off"
        value = { user.password }
        onChange = { handleInputs }
        placeholder = "PASSWORD"
        className = "password1" />
        <input type = "password"
        name = "confirmpassword"
        autocomplete="off"
        value = { user.confirmpassword }
        onChange = { handleInputs }
        placeholder = "CONFIRM PASSWORD"
        className = "cpassword1" />
        <button type = "submit"
        className = "Submit"
        value = "register"
        onClick = { PostData } > <span className = "signup" > SIGN UP </span></button >
        </form>   
        <NavLink to = "/signin" > <h4 className = "Heading2" > Already a user ? SIGN IN </h4></NavLink >
        </div>    
        </>
    );
}

export default Signup;