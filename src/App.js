import React from "react";
import Header from "./memeGenerator/MemeHeader.js";
import Content from "./memeGenerator/memecontent.js";
import "./memeGenerator/Meme.css";
const App=()=>{
   return (
    <div className="main">
    <Header/>
     <Content/>
   </div>
   )
}
export default App