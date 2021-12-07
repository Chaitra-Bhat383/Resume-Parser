import React from 'react';
import Navbar from "./Navbar";
import img1 from "./images/img8.png";
import img2 from "./images/img7.png";


const App = () => {
    return ( <>
        <Navbar/>
        <div className = "page" >
        <h1 className = "Heading3" > < b > Let 's Look at some Stats... </b></h1> 
        <img src = { img1 }
        alt = "Image can't be displayed"
        className = "imgs1" />
        <img src = { img2 }
        alt = "Image can't be displayed"
        className = "imgs2" />
        </div>  
        </>
    );
};

export default App;