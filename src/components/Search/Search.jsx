import React from 'react'
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div className='flex justify-center'>
            <input className='min-w-full px-3 py-2 border-none outline-none rounded-l-md' placeholder='Buscar...' />
            <button className='px-3 py-2 border-none outline-none rounded-r-md text-white bg-orange-600 transition-all duration-300 hover:bg-orange-500'>
                <BsSearch />
            </button>
        </div>
    )
}

export default Search
