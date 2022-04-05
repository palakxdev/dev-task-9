import React from 'react';
import './Header.css';
import headphone from '../images/headphone.png'

const Header = () => {
    return (
        <div className="header-container p-5 lg:flex items-center justify-between">
            <div className="header-title tracking-wide">
                <h1 className='text-5xl font-bold'>OUR SMART<br /><br />
                    <span className='title-span'>HEAD-PHONE </span>GADGET!</h1>
                <button className='rounded-full header-btn py-2 px-5 tracking-wide mt-6 shadow-md'>Explore Device</button>
            </div>
                <div>
                <img src={headphone} alt="" />
                </div>
        </div>
    );
};

export default Header;