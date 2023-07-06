import React from 'react';
import headShot from '../assets/HSSquare.jpg';
const Header = () => {
    return (
        <header class="flex flex-row bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <img className='w-64 rounded-full' src={headShot} alt='Headshot of Brandon'/>
            <div class="flex flex-col justify-center">
            <h1 class="text-center align-top">Brandon Kilgore </h1>
            <p class="text-center">Full Stack Developer</p>
            </div>
        </header>
    )
}

export default Header;