import React, { useState } from 'react';
import Project from './project';
import FoodWillBeerUsApart from '../assets/projectPhotos/FoodWillBeerUsApart.jpg';
import ExpressNoteTaker from '../assets/projectPhotos/Express-Note-Taker.jpg';
import NoSQLAPIscreenshot from '../assets/projectPhotos/NoSQLAPIscreenshot.jpg';
import ORMAPI from '../assets/projectPhotos/ORM-API.jpg'
import PotItLikeItsHot from '../assets/projectPhotos/PotItLikeItsHot.jpg';
import SVGLogoGen from '../assets/projectPhotos/SVGLogoGen.jpg'
import QuackCraft from '../assets/projectPhotos/QuackCraft.png'


const Portfolio = () => {
    const [projects] = useState([
        {
            title: 'QUACKCRAFT-3D-PRINTING',
            github: 'https://github.com/Brandonk1023/QUACKCRAFT-3D-PRINTING',
            link: 'https://gentle-river-99860-f681a35f9ec5.herokuapp.com/',
            content: 'This is a 3D printing application for users to use for resources and learning.',
            image: QuackCraft,
        },
            {
                title: 'FoodWillBeerUsApart',
                github: 'https://github.com/Brandonk1023/FoodWillBeerUsApart',
                link: '',
                content: 'This is an application that provides the user with an easy to use tool to create food and beer pairings.',
                image: FoodWillBeerUsApart,
            },
            {
                title: "Pot It Like It's Hot",
                github: 'https://github.com/stbuiemory/2kPerDay',
                link: '',
                content: 'This is an application that allows the user to learn about plants and cultivate a digital garden. This app is still currently under construction',
                image: PotItLikeItsHot,
            },
            {
                title: 'NoSQL-Social-Network-API',
                github: 'https://github.com/Brandonk1023/NoSQL-Social-Network-API/tree/main',
                link: '',
                content: 'This is a mock back-end API for a social network, using a NoSQL, MongoDB database.',
                image: NoSQLAPIscreenshot,
            },
            {
                title: 'ORM-Ecommerce-Back-End',
                github: 'https://github.com/Brandonk1023/ORM-Ecommerce-Back-End',
                link: '',
                content: 'This is mock back-end MySQL application for an ecommerce site.',
                image: ORMAPI,
            },
            {
                title: 'Express-Note-Taker',
                github: 'https://github.com/Brandonk1023/Express-Note-Taker',
                link: '',
                content: 'This is a note taking application that a user can use for planning and organization.',
                image: ExpressNoteTaker,
            },
            {
                title: 'OOP-SVG-Logo-Maker',
                github: 'https://github.com/Brandonk1023/OOP-SVG-Logo-Maker',
                link: '',
                content: 'This application is a simple SVG Logo generator',
                image: SVGLogoGen,
            },
        ]);

    return (
        <section class="flex flex-row justify-center">
           {/*  <h2 class="justify">Portfolio</h2> */}
            <div class="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;