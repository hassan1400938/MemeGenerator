import React from "react";

export default function MainContent() {
  return (
    <main className="main">
      <div className="main--inputs">
        <input type="text" className="main--setup" />
        <input type="text" className="main--punchline" />
      </div>
      <button className="main--get-meme-img">Get a new meme image 🖼</button>
      <div className="main--meme-img">
        <h2 className="meme-img--setup">Shut up</h2>
        <h2 className="meme-img--punchlinne">and take my money</h2>
      </div>
    </main>
  );
}
