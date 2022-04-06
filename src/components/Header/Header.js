import React from 'react';
import './Header.css';
import headphone from '../images/headphone.png';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeReviewContainer from '../HomeReviewContainer/HomeReviewContainer';

const Header = () => {
    const [reviews, setReviews] = useReviews();
    const loadedReviews = reviews.slice(0, 3);
    
    return (
        <div>
            <div className="header-container p-5 lg:flex items-center justify-between">
                <div className="header-title tracking-wide">
                    <h1 className='text-5xl font-bold'>OUR SMART<br />
                        <span className='title-span'>HEAD-PHONE </span>GADGET!</h1>
                    <p className='mt-4 text-slate-500'>Cheap price wholesale OEM foldable peaceful head phone wireless and earphone <br /> mobile wireless headphone with high quality noise free microphone.</p>
                    <button className='rounded-full header-btn py-2 px-5 tracking-wide mt-6 shadow-md'>Explore Device</button>
                </div>
                <div>
                    <img src={headphone} alt="" />
                </div>
            </div>

            <div className="container mx-auto grid lg:grid-cols-3 gap-3 p-5">
                {
                    loadedReviews.map(review => <HomeReviewContainer key={review.id} review={review}></HomeReviewContainer>)
                }
            </div>
            <div className='text-center'>
                <Link to='/reviews'><button className='rounded-full review-btn py-2 px-5 m-3 tracking-wide shadow-lg'>Show All Review</button></Link>
            </div>

        </div>
    );
};

export default Header;