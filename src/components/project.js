import React from 'react';

const Project = ({ project }) => {
    return (
        <div >
            <img src={project.image} alt={project.title} />
            <div>
                <h2>{project.title}</h2>
                <div>
                    <a href={project.link} target="_blank" rel="noreferrer" >View Project</a>
                    <a href={project.github} target="_blank" rel="noreferrer" >GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Project;