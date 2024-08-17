import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import HomeIcon from './ui/icons/HomeIcon';
import CalendarIcon from './ui/icons/CalendarIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';


const navBarList = [
    { link: '/home', text: 'Home', icon: <HomeIcon /> },
    { link: '/calendar', text: 'Calendar', icon: <CalendarIcon /> },
    { link: '/bookmark', text: 'Bookmark', icon: <BookmarkIcon /> },
]

export default function Navbar() {
    const [nav, setNav] = useState(navBarList[0].text);
    return (
        <header className='md:border-b-none md:border-r-2 md:px-3 border-r-none border-b-2 md:basis-1/5'>
            <div className='md:block hidden'>
                <Profile />
            </div>
            <ul className='flex flex-row md:flex-col justify-between'>
                {navBarList.map(({ link, text, icon }, idx) => (
                    <li key={idx} onClick={() => setNav(text)}><Link className={`flex items-center p-2 ${text === nav && 'text-blue-950 font-bold'}`} to={link}>{icon} {text}</Link></li>
                ))}
            </ul>
        </header>
    );
}

