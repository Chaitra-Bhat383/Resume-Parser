import React, { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MyImage from "./images/img3.png"; { document.body.style = 'background: #457B9D' }

const Home = () => {
    const history = useNavigate();
    const callHome = async() => {
        try {
            const res = await fetch('/home', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);           
        }
    }

    useEffect(() => {
        callHome();
    }, [])

    const rateResume = async(e) => {
        e.preventDefault();
        history("/upload");
    }
    const build = async(e) => {
        e.preventDefault();
        history("/text");
    }
    const stats = async(e) => {
        e.preventDefault();
        history("/stats");
    }

    return ( 
        <>
        <Navbar/>
        <div className = "page" >    
        <h1 className = "Heading" > < b > We're drowning in information and starving for knowledge. </b></h1>  
        <img className = "img3"
        src = { MyImage }
        alt = "Image can't be displayed"/>
        <button type = "submit"
        className = "rate"
        onClick = { rateResume } > <b> Rate your Resume </b></button >
        <button type = "submit"
        className = "build"
        onClick = { build } > <b> Build your Resume </b></button >
        <button type = "submit"
        className = "stand"
        onClick = { stats } > <b> Where you stand </b></button >
        </div>
        </>
    );
}

export default Home;