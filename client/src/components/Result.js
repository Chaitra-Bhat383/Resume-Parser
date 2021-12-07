import React,{Component} from 'react';
import img1 from "./images/new_img.png";
import img2 from "./images/img6.svg";
import Navbar from "./Navbar";

class App extends Component {

    constructor(props) {
      super(props);
    }
  
    showFile = async (e) => {
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e) => { 
        const text = (e.target.result)
        console.log(text)
        alert(text)
      };
      reader.readAsText(e.target.files[0])
    }
  
    render = () => {
  
      return (
        <>
        <Navbar/>
        <div>
        
        <div className = "page" > </div>   
        <h1 className = "Heading7" > Great Job!!You set a bar with this one </h1> 
        <h1 className = "Heading8" > You 'd make a Great</h1> 
        <input className="Heading9" type="file" onChange={(e) => this.showFile(e)} />
        <img src = { img1 }
        alt = "Image can't be displayed"
        className = "imgr1"/>
        <img src = { img2 }
        alt = "Image can't be displayed"
        className = "imgr2"/>  
        
      </div>
      </>
      )
    }
  }


    
export default App;