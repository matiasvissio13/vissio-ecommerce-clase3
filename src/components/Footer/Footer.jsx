import React from 'react'
import Contact from '../Contact/Contact'
import MyIcon from '../MyIcon/MyIcon'

const Footer = () => {
    return (
        <footer className='flex justify-center w-screen py-4 bg-zinc-900'>
            <div className='flex justify-between px-10 items-center text-white w-full text-center max-w-[1240px]'>
                <MyIcon />
                <p>&copy; 2023 Vissio. Todos los derechos reservados.</p>
                <Contact />
            </div>
        </footer>
    )
}

export default Footer
