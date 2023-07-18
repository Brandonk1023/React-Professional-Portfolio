import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col mx-auto'>
            <h2 className='flex justify-center m-4'>Contact</h2>
            <div className='card w-96 glass p-4 my-4'>
            <p className='pb-4'>Thank you for your interest in contacting me.  If you would like to contact me please reach out to me using any of the following channels below.  I look foward to hearing from you!</p>
            <ul className="flex flex-row justify-center gap-4">
                <li>
                    <button className='btn btn-primary'>
                        <a href='https://www.linkedin.com/in/charles-kilgore-69695b135/'>LinkedIn</a>
                    </button>
                </li>
                <li>
                    <button className='btn btn-secondary'>
                        <a href='https://github.com/Brandonk1023'>GitHub</a>
                    </button>
                </li>
                <li>
                    <button className='btn btn-accent'>
                        <a href='mailto:brandonk1023@gmail.com'>Email</a>
                    </button>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Contact;