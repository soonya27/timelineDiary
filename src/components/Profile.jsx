import React from 'react';

export default function Profile({ name, image }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-12 f-12 rounded-full overflow-hidden'>
                <img src={image} alt="userImage" />
            </div>
            <strong>{name}</strong>
        </div>
    );
}

