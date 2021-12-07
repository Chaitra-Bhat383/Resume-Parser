import React from 'react';
import Navbar from "./Navbar";
import MyImage from "./images/img9.png"; { document.body.style = 'background: #A8DADC' }
const App = () => {
    return ( <>
        <Navbar/>
        <div >
        <div className = "page" > </div>    
        <input type = "text area"
        className = "input" />
        <img src = { MyImage }
        alt = "Image can't be displayed"
        className = "text" />
        </div> </>
    );
};

export default App;