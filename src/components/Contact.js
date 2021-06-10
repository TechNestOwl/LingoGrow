import React from 'react'
import "../App.css";


export default function Contact() {
    return (
        <div>
            <h1>Email Me</h1>
            <form className="contactForm">
                        <div>
                        <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon"></img>
                        </div>
                        <input type="text" placeholder="Name" required></input>
                        <br></br>
                        <input type="text" placeholder="Return address" required></input>
                        <br></br>
                        <input type="text" placeholder="Subject" required></input>
                        <br></br>
                        <textarea placeholder="Subject" required></textarea>
                        <input type="submit" value="Send"></input>
            </form>
        </div>
    )
}
