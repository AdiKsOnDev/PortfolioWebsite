import React, { useState } from 'react';

function Review() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "email": email,
            "name": name,
            "review": description
        };
        console.log("SENDING --> " + JSON.stringify(data))
        const response = await fetch("/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        console.log(response);
        setEmail('');
        setName('');
        setDescription('');
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-48">
            <h1 id="Review" className="text-tertiary font-semibold text-5xl mb-10">Leave a Review</h1>
            
            <form className="flex flex-col justify-center items-center w-full bg-secondary rounded-2xl p-12" onSubmit={handleSubmit}>
                <input className='w-full rounded-md shadow-secondary shadow-inner px-5 py-2 mb-6' type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />

                <input className='w-full rounded-md shadow-secondary shadow-inner px-5 py-2 mb-6' type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <textarea className='w-full rounded-md shadow-secondary shadow-inner px-5 py-2 h-48 mb-5' value={description} placeholder='Review' onChange={(e) => setDescription(e.target.value)} />

                <button className='bg-grass px-5 py-2 font-semibold text-tertiary rounded-lg' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Review;