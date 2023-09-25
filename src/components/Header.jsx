import React from "react";
import logo from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="app-logo" className="header--logo" />
      <h1 className="header--title">Meme Generator</h1>
      <p className="header--description">React Course - Project 3</p>
    </header>
  );
}
