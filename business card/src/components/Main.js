import React from "react";
import mail from "../images/mail.png"
import linkedin from "../images/linkedin.png"

export default function Main() {
  return <div className="profile">
          <div className="profileDetails">
            <h1>Quantum 0x</h1>
            <p className="title">Web3 UX Engineer</p>
            <p className="domain">devquantum.xyz</p>
          </div>
          <div className="profileLinks">
            <div className="link"><img src={mail} alt="" /><a href="mailto:helloquantum0x@gmail.com">Email</a></div>
            <div className="link linkedin"><img src={linkedin} alt="" /><a href="linkedin.com">LinkedIn</a></div>
          </div>
         <div className="description">
            <div className="textBlock">
                <h2>About</h2>
                <p>I am a web3 UX Engineer with a particular interest in making things simple and decentralized. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="textBlock">
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
          </div>
  </div>
}