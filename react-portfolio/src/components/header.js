import React from 'react';
import headShot from 'react-portfolio/assets/HSSquare.jpg';
const Header = () => {
    return (
        <header>
            <img src={headShot} alt='Headshot of Brandon'></img>
            <h1>Brandon Kilgore </h1>
            <p>Full Stack Developer</p>
        </header>
    )
}

export default Header;