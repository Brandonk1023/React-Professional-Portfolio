import React, { useState } from 'react';

const Portfolio = () => {
    constant [projects] = useState([
        {
            name: '',
            image: ,
            link: '',
            github: ''
        },
        {
            name: '',
            image: ,
            link: '',
            github: ''
        },
        {
            name: '',
            image: ,
            link: '',
            github: ''
        },
        {
            name: '',
            image: ,
            link: '',
            github: ''
        },
        {
            name: '',
            image: ,
            link: '',
            github: ''
        },
        {
            name: '',
            image: ,
            link: '',
            github: ''
        },
    ])

    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                {projects.map((project, index) => (
                    <project key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;