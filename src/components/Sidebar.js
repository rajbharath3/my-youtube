import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className='p-1 w-44 shadow-lg w-48  bg-white fixed l-0 overflow-y-scroll h-screen max-h-[85vh]'>
            <ul className='font-semibold p-3 text-gray-700'>
                <Link to="/"><li>Home</li></Link>
                <li>Shorts</li>
                <li>Subscriptions</li>

            </ul>
            <h1 className='text-xl font-semibold underline'>Explore</h1>
            <ul className='ml-5 p-3 font-semibold text-gray-700'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>


            </ul>
            <h1 className='text-xl font-semibold underline'>Explore</h1>
            <ul className='ml-5 p-3 font-semibold text-gray-700'>
                <li>Learning</li>
                <li>Fashion</li>
                <li>Cooking</li>
                <li>UnqGamer</li>
                <li>TeluguGamer</li>
                <li>Naa Anveshana</li>


            </ul>
            <h1 className='text-xl font-semibold underline'>More from youtube</h1>
            <ul className='ml-5 p-3 font-semibold text-gray-700'>
                <li>Youtube studio</li>
                <li>Youtube premium</li>
                <li>Youtube Music</li>
                <li>Youtube Kids</li>

            </ul>
        </div>
    )
}

export default Sidebar
