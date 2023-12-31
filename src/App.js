import React from "react";
import Header from "./DigitalCard/DigitalCardHeader.js";
import Content from "./DigitalCard/DigitalCardContent.js";
import "./DigitalCard/DigitalCard.css";
const App=()=>{
   return (
    <div className="Main">
      <div className="MainContent">
    <Header/>
     <Content/>
   </div>
   </div>
   )
}
export default App