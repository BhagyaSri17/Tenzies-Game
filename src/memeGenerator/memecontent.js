
import React from "react";
import { useState } from "react";

const Content=()=>{
 // const [Image,setImage]=React.useState("https://i.imgflip.com/30b1gx.jpg");
 const [memereset ,setImage]=useState({
  toptext:"",
  bottomtext:"",
  image:"https://i.imgflip.com/30b1gx.jpg"
 })
 const [memeArray,setmemeArray]=useState([])
function handletext(e){
  const {name ,value}=e.target;
  setImage(previmage=>
    ({...previmage,
     [name]:value})
    
     )
   
}
  function getImage(e){
    e.preventDefault(); 
    const randomnumber=Math.floor(Math.random()*memeArray.length);
    const URL=memeArray[randomnumber].url;
 
   setImage(previmage=>
   ({...previmage,
    image:URL})
   
    )
  
  }
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setmemeArray(data.data.memes))
  },[])
    return (
      <>
        <div className="content">
          <form className="form">
            <input placeholder="top Text" type="text" name="toptext" value={memereset.toptext} onChange={handletext}/>
            <input placeholder="Bottom text" type="text" name="bottomtext" value={memereset.bottomtext} onChange={handletext}/>
            <button name="image" onClick={getImage}>Get a new meme image  🖼</button>
          
          </form>

        </div>
        <div className="meme">
        <img src={memereset.image} alt="meme" className="image1" />
        <h1 className="memetext top">{memereset.toptext}</h1>
        <h1 className="memetext bottom">{memereset.bottomtext}</h1>
        </div>
        </>
    )
} 
export default Content