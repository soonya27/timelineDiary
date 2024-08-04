import React from 'react';

export default function Button({ text, color = 'main' }) {
    return (
        <button className={`${color === 'main' ? 'bg-sky-400' : color} w-full`}>{text}</button>
    );
}

