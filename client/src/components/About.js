import React from 'react'
import MyImage from "./images/img5.svg";
import Navbar from "./Navbar";
import IMG1 from "./images/Charvi.jpg";
import IMG2 from "./images/Ankitha.jpeg";
import IMG3 from "./images/Chaitra.jpeg"; { document.body.style = 'background: #A8DADC' }

const About = () => {
    return ( <>
        <Navbar/>
        <div className='plswork'>
        <div>
        <div className = "page" > </div>     
        <p className = "paragraph" >
        This project aims to build a website which facilitates the resume selection process both
        for students and the working class. We aim to integrate it with machine learning models and other APIs. </p>   
        <img src = { MyImage }
        alt = "Image can't be displayed"
        className = "contentcreator" />
        <h1 className = "creators" > Creators: </h1>  
        <img src = { IMG1 }
        alt = "Image can't be displayed"
        className = "Charvi" />
        <p className = "Name1"> <a style={{textDecoration:"none",color:"black"}} href="https://github.com/charvibannur">Charvi Bannur</a> </p>  
        <img src = { IMG2 }
        alt = "Image can't be displayed"
        className = "Ankitha" />
        <p className = "Name2" > <a style={{textDecoration:"none",color:"black"}} href="https://github.com/Ankithac45">Ankitha</a></p>  
        <p className = "Name3" > </p>  
        <img src = { IMG3 } 
        alt = "Image can't be displayed"
        className = "Chaitra" />
        <p className = "Name3" ><a style={{textDecoration:"none",color:"black"}} href="https://github.com/Chaitra-Bhat383"> Chaitra Bhat</a> </p>  
        </div>    
        </div>
        </>
    )
}

export default About