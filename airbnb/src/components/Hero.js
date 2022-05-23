import React from "react"
import heroImage from "../images/heroImage.png"

export default function Hero() {
    return (
        <section>
            <div className="heroImage"><img src={heroImage} alt=""/></div>
            <div className="heroText"><h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p></div>
        </section>
    )
}