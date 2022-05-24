import React from "react";
import image from "../images/image.png"

export default function Main() {
    return (
      <div className="main">
            <div className="form">
              <form action="" className="form">
                <div className="input">
                  <input type="text" id="fname" name="fname" placeholder="Shut up"></input>
                  <input type="text" id="lname" name="lname" placeholder="and take my money"></input>
                </div>
                <input type="submit" value="Get a new meme image 😆"></input>
              </form>
            </div>
            <div className="displayImage">
              <div className="displayText">
                  <p className="top">SHUT UP</p>
                  <p className="bottom">AND TAKE MY MONEY</p>
              </div>
              <img src={image} alt="display_image" />
            </div>
      </div>
    )
}