import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
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
            </nav>
        </div>
    )
}
