import React from "react";
import world from "../images/world.png"

export default function Header() {
    return (
      <div className="nav">
        <img src = {world} alt="world" />
        <p><span className="title">my travel journal.</span></p>
      </div>
    )
}