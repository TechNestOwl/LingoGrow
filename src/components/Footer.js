import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="footer">
            <h4 className="footerText">DigitalCrafts</h4>
                <ul>
                    <Link to="/contact">
                        <li>Contact</li>   
                    </Link>
                </ul>
        </div>
    )
}
