import React from "react";
import logo from "./ai gen.jpeg";
import {MdEmail} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


const Header = () => {
  function HandleLinkedIn(){
    window.open("https://www.linkedin.com/in/bhagya-sri-pitta-b35518246");
  }
  function HandleEmail(){
    window.open("mailto:bhagyasri1783@gmail.com");
  }
    return (
        <div className="Header">
        <div className="Sub">
             <img src={logo}/>
        </div>
        <div className="info">
          <span className="name">Bhagya Sri</span>
          <span className="student"> Student</span>
           <small>B.tech</small>
           </div>
        <div className="btn">
            <button className="email" onClick={HandleEmail}>
          <MdEmail/>
          Email</button>
            <button className="LinkedIn" onClick={HandleLinkedIn}>
                <FaLinkedin />
                LinkedIn</button>
        </div>
        </div>
    )
}
export default Header