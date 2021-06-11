import React from 'react'
import { Link } from 'react-router-dom'
import lingoGrow from "../assets/lingoGrow.png"

export default function Nav() {
    return (
        <div>
            <nav>
                <div className="nav-logo">
                    <Link to="/">
                    <img src={lingoGrow} alt="logo"/>
                    </Link>
                </div>
                <ul className="navLinkContainer">
                    <Link to="/">
                        <li className="navLinks">Home</li>
                    </Link>
                    <Link to="/explore">
                    <li className="navLinks">Explore</li>
                    </Link>
                    <Link to="/about">
                    <li className="navLinks">About</li>
                    </Link>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}
