import React from 'react'
import MyIcon from '../MyIcon/MyIcon';
import Search from '../Search/Search';


export function Header() {
    return (
        <header className='flex fixed top-0 left-0 justify-center w-screen py-4 bg-zinc-900'>
            <div className='flex justify-center sm:justify-between px-10 items-center w-full text-center max-w-[1240px]'>
                <MyIcon />
                <Search />
                <button className='hidden sm:block px-3 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-500 transform duration-300'>Sign In</button>
            </div>
        </header>
    )
}