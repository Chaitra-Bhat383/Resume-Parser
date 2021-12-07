import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MyImage from "./images/img4.svg";

const Upload = () => {
    const history = useNavigate();
    const [upload, setUpload] = useState({
        uploads: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUpload({...upload, [name]: value });
    };

    
    const submitResume = async(e) => {
        e.preventDefault();
        history("/result");
        const { uploads } = upload;
        const res = await fetch("/upload", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uploads
            })
        });

    }
    return ( <>
    <Navbar/>                               
        <h2 className = "Heading6" > Skills </h2>    
        <img src = { MyImage }
        alt = "Image can't be displayed"
        className = "img4"/>
        <form method = "POST" >
        <input type = "text"
        className = "upload1"
        name = "uploads"
        autocomplete="off"
        spellcheck="false"
        value = { upload.uploads }
        onChange = { handleInputs }
        placeholder = "INSERT RESUME" />
        <button type = "submit"
        className = "build1"
        onClick = { submitResume } > SUBMIT </button > 
        </form > 
        </>
    );
};

export default Upload