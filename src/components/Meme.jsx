import React from "react";
import memeData from "./memeData";
import meme from "../assets/memeimg.png";

export default function MainContent() {
  const [memeImage, setMemeImage] = React.useState(`${meme}`);
    
  
  
  function getMeme() {
    const memeArray = memeData.data.memes;
    const getRendonNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[getRendonNumber].url;
    setMemeImage(url);
  }

  return (
    <main className="main">
      <div className="form">
        <input type="text" className="form--input" placeholder="Set up line" />
        <input type="text" className="form--input" placeholder="Punch line" />
        <button onClick={getMeme} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="main--meme">
        <img src={memeImage} alt="meme-image" className="meme--img" />
        <h2 className="meme--setup">Shut up</h2>
        <h2 className="meme--punchline">and take my money</h2>
      </div>
    </main>
  );
}
