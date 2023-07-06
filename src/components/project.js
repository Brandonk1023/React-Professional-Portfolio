import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="flex flex-row card w-96 glass justify-around">
            <img src={project.image} alt={project.title} />
            <div class="flex flex-col justify-around">
                <h2>{project.title}</h2>
                <div class="flex flex-col justify-around">
                    <a href={project.link} target="_blank" rel="noreferrer" >View Project</a>
                    <a href={project.github} target="_blank" rel="noreferrer" >GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Project;