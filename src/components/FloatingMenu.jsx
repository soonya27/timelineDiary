import React from 'react';
import { Link } from 'react-router-dom';
import NewIcon from './ui/icons/NewIcon';

export default function FloatingMenu() {
    return (
        <Link to="/new" className='fixed right-4 bottom-4 flex items-center justify-center bg-sky-400 w-14 h-14 rounded-full text-white text-lg'><NewIcon /></Link>
    );
}

