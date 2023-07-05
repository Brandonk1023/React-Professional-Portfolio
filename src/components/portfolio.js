import React, { useState } from 'react';
import Project from './project';

const Portfolio = () => {
    const [projects] = useState([
            {
                title: 'FoodWillBeerUsApart',
                github: 'https://github.com/Brandonk1023/FoodWillBeerUsApart',
                link: '',
                content: 'This is an application that provides the user with an easy to use tool to create food and beer pairings.',
                image: '',
            },
            {
                title: "Pot It Like It's Hot",
                github: 'https://github.com/stbuiemory/2kPerDay',
                link: '',
                content: 'This is an application that allows the user to learn about plants and cultivate a digital garden. This app is still currently under construction',
                image: '',
            },
            {
                title: 'NoSQL-Social-Network-API',
                github: 'https://github.com/Brandonk1023/NoSQL-Social-Network-API/tree/main',
                link: '',
                content: 'This is a mock back-end API for a social network, using a NoSQL, MongoDB database.',
                image: '',
            },
            {
                title: 'ORM-Ecommerce-Back-End',
                github: 'https://github.com/Brandonk1023/ORM-Ecommerce-Back-End',
                link: '',
                content: 'This is mock back-end MySQL application for an ecommerce site.',
                image: '',
            },
            {
                title: 'Express-Note-Taker',
                github: 'https://github.com/Brandonk1023/Express-Note-Taker',
                link: '',
                content: 'This is a note taking application that a user can use for planning and organization.',
                image: '',
            },
            {
                title: 'OOP-SVG-Logo-Maker',
                github: 'https://github.com/Brandonk1023/OOP-SVG-Logo-Maker',
                link: '',
                content: 'This application is a simple SVG Logo generator',
                image: '',
            },
        ]);

    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;