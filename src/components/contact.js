import React from 'react';

const Contact = () => {
    return (
        <div class='flex flex-col justify-center'>
            <h2>Contact Form</h2>
            <p>Thank you for your interest in contacting me.  If you would like to speak to me or contact me please reach out to me using any of the following channels below.</p>
            <ul class="flex flex-row gap-4">
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
    )
}

export default Contact;