import React from "react";
import trollFace from "../images/trollFace.png"

export default function Header() {
    return (
      <div className="nav">
        <div className="logo">
            <img src = {trollFace} alt="world" />
            <h1>Meme Generator</h1>
        </div>
        <p>React Course - Project 3</p>
      </div>
    )
}