import React from "react";
import data from "../data.js"


export default function Main() {

    const [currentImage, setNewImage] = React.useState("")

    function fetchImage() {
        const allData = data.data.memes;
        const randomData = Math.floor(Math.random() * allData.length)
        const newData = data.data.memes[randomData].url
        setNewImage(newData)
    }


  
    return (
      <div className="main">
            <div className="form">
              {/* <form action="" className="form"> */}
                <div className="input">
                  <input type="text" id="fname" name="fname" placeholder="Shut up"></input>
                  <input type="text" id="lname" name="lname" placeholder="and take my money"></input>
                </div>
                <input type="submit" value="Get a new meme image 😆" onClick={fetchImage}></input>
              {/* </form> */}
            </div>
            <div className="displayImage">
              <div className="displayText">
                  <p className="top">SHUT UP</p>
                  <p className="bottom">AND TAKE MY MONEY</p>
              </div>
              {/* <div className="img"> */}
              <img src={currentImage} alt="display_image" />
              {/* </div> */}
            </div>
      </div>
    )
}