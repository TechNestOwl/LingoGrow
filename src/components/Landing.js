import React from 'react'
import landingPhoto from "../assets/landingPhoto.jpg"

export default function Landing() {
    return (
        <div style={{
            backgroundImage: `url(${landingPhoto})`,
            backgroundRepeat: 'noRepeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '1000px'
        }}>
            
        </div>
    )
}
