import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="footer">
            <h4>Gill Guimares</h4>
                <ul>
                    <Link to="/contact">
                        <li>Contact Me</li>   
                    </Link>
                </ul>
        </div>
    )
}
