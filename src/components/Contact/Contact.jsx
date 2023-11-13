import React from 'react'
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='hidden sm:flex gap-4'>
            <a href="#" className='text-white text-[1.2rem] transition-all duration-400 hover:text-orange-600'><BsFacebook /></a>
            <a href="#" className='text-white text-[1.2rem] transition-all duration-400 hover:text-orange-600'><BsInstagram /></a>
        </div>
    )
}

export default Contact
