import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Content=()=>{
    function HandleGit(){
        window.open("https://github.com/BhagyaSri17");
    }
    return(
        <>
        <div className="Content">
          <span className="About"> About</span><br></br>
           I'm a student at Sri Vasavi Engineering 
            College,Studying Bachelor of Technology in Stream
             of Computer Science and Engineering.<br></br><br></br>
             <span className="About">Interests</span><br></br>
         Coding.Drawing.Surfing Internet. Gardening.
            Coffee holic.Shinchan buff.
            </div>
            <div className="icons">
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaGithubSquare onClick={HandleGit}/>
            </div>
            </>
    )
}
export default Content