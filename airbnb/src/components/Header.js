import React from "react"
import logo from "../images/logo.png"

export default function Header() {
    return (
        <header className="nav">
            <img src={logo} alt="logo" />
        </header>
    )
}