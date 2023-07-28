import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="flex flex-row card h-64 w-11/12 glass justify-around p-4">
            <img className="w-40 rounded m-4" src={project.image} alt={project.title} />
            <div class="flex flex-col justify-around">
                <h2 className='text-lg'>{project.title}</h2>
                <div class="flex flex-col justify-around">
                   {/*  <button className='btn btn-secondary w-48 mb-1'>
                    <a href={project.link} target="_blank" rel="noreferrer" >View Project</a>
                    </button> */}
                    <button className='btn btn-accent w-48'>
                    <a href={project.github} target="_blank" rel="noreferrer" >GitHub</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;