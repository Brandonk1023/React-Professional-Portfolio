import React from 'react';
import resume from '../assets/Resume.pdf'
const Resume = () => {
    return(
        <div>
           {/*  <h2>resume</h2> */}
            <p> Thanks for your interest in my resume. You can download a PDF copy by clicking <a className='link link-primary' href={resume} download="Brandon Kilgore Resume.pdf">here</a>.
            </p>
            <div></div>
        </div>
    )
}

export default Resume;