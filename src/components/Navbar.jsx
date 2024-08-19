import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import HomeIcon from './ui/icons/HomeIcon';
import CalendarIcon from './ui/icons/CalendarIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import Button from './ui/Button';
import { useModalContext } from '../context/ModalContext';
import { useAuthContext } from '../context/AuthContext';


const navBarList = [
    { link: '/home', text: 'Home', icon: <HomeIcon /> },
    { link: '/calendar', text: 'Calendar', icon: <CalendarIcon /> },
    { link: '/bookmark', text: 'Bookmark', icon: <BookmarkIcon /> },
]

export default function Navbar() {
    const [nav, setNav] = useState(navBarList[0].text);

    const { login, logout, user } = useAuthContext();

    return (
        <header className='flex flex-col md:border-b-none md:border-r-2 md:p-3 border-r-none border-b-2 md:basis-1/5'>
            <div className='md:block hidden'>
                {user && <Profile />}
            </div>
            <ul className='flex flex-row md:flex-col flex-grow-[1] flex-shrink-[1] basis-auto justify-between md:justify-start'>
                {navBarList.map(({ link, text, icon }, idx) => (
                    <li key={idx} onClick={() => setNav(text)}><Link className={`flex items-center p-2 ${text === nav && 'text-blue-950 font-bold'}`} to={link}>{icon} {text}</Link></li>
                ))}
            </ul>
            <div className='md:block hidden'>
                {user ? <Button text='logout' onClick={() => logout()} />
                    : <Button text='login' onClick={() => login()} />}
            </div>
        </header>
    );
}

