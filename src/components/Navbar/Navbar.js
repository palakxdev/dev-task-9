import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='flex justify-between p-5'>
                <h2 className='text-2xl font-semibold'>GADGET-ANALYSIS</h2>
                <ul className='lg:flex'>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/reviews'>Reviews</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;