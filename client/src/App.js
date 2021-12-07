import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Stats from "./components/Stats";
import Text from "./components/Text";
import Upload from "./components/Upload";
import Result from "./components/Result";

const App = () => {
    return ( <>
    
        <Routes >    
        <Route exact path = "/"
        element = { < Signup /> }
        /> 
        <Route exact path = "/Signin"
        element = { < Signin /> }
        /> 
        <Route exact path = "/home"
        element = { < Home /> }
        /> 
        <Route exact path = "/about"
        element = { < About /> }
        /> 
        <Route exact path = "/stats"
        element = { < Stats /> }
        /> 
        <Route exact path = "/upload"
        element = { < Upload /> }
        /> 
        <Route exact path = "/text"
        element = { < Text /> }
        /> 
        <Route exact path = "/result"
        element = { < Result /> }
        /> 
        </Routes> 
        </>
       
    );
}

export default App;