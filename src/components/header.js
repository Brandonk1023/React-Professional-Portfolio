import React from 'react';
import headShot from '../assets/HSSquare.jpg';
import logo from '../assets/Black logo - no background.png'
const Header = () => {
    return (
        <header class="flex flex-row bg-gradient-to-r from-violet-500 to-fuchsia-500 justify-center">
            <img className='w-64 rounded-full' src={headShot} alt='Headshot of Brandon'/>
            <img  className="max-w-xl" src={logo} alt='Brand Logo'/>
        </header>
    )
}

export default Header;