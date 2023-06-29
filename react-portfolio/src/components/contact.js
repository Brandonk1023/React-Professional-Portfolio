import React, { useState } from 'react';

const contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        messageContent: '',
    })

    const { name, emai, messageContent } = formState;

    return (
        <section>
            <div>
                <h2>Contact Me</h2>
                <form>

                </form>
            </div>
        </section>
    )
}

export default contact;