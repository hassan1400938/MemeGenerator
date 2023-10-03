import React from "react";
// import memeData from "./memeData";

export default function MainContent() {
  const [formData, setFormData] = React.useState({
    setUpLine: "",
    punchLine: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // [event.target.name]: event.target.value
    }));
  }

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [memesData, setMemesData] = React.useState({});

  // React.useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setMemesData(data));
  // }, []);

  React.useEffect(() => {
    async function getApiMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemesData(data);
    }
    getApiMemes();
  }, []);

  function getMeme() {
    const memeArray = memesData.data.memes;
    const getRendonNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[getRendonNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Set up line"
          name="setUpLine"
          onChange={handleChange}
          value={formData.setUpLine}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Punch line"
          name="punchLine"
          onChange={handleChange}
          value={formData.punchLine}
        />
        <button onClick={getMeme} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="main--meme">
        <img src={meme.randomImage} alt="meme-image" className="meme--img" />
        <h2 className="meme--setup">{formData.setUpLine}</h2>
        <h2 className="meme--punchline">{formData.punchLine}</h2>
      </div>
    </main>
  );
}
