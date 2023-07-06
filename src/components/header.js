import React from 'react';
import headShot from '../assets/HSSquare.jpg';
const Header = () => {
    return (
        <header>
            <img className='w-64 rounded-full' src={headShot} alt='Headshot of Brandon'/>
            <h1>Brandon Kilgore </h1>
            <p>Full Stack Developer</p>
        </header>
    )
}

export default Header;