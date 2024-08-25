import React from 'react';
import { Link } from 'react-router-dom';
import NewIcon from './ui/icons/NewIcon';
import { useAuthContext } from '../context/AuthContext';

export default function FloatingMenu() {
    const { user, login } = useAuthContext();
    const cssStyle = 'fixed right-4 bottom-4 flex items-center justify-center bg-sky-400 w-14 h-14 rounded-full text-white text-lg';
    return (
        <>
            {
                user ? <Link to="/new" className={`${cssStyle}`}><NewIcon /></Link>
                    : <div className={`${cssStyle} cursor-pointer`} onClick={() => login()}><NewIcon /></div>
            }
        </>
    );
}

