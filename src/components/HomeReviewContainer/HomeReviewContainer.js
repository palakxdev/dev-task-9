import React from 'react';

const HomeReviewContainer = (props) => {
    const { name, img, comment, rating} = props.review;

    return (
        <div>
            <div className=" review-container py-8 px-8 max-w-sm rounded-xl shadow-lg">

                <div className="flex flex-wrap justify-center">
                    <div className="w-6/12 sm:w-4/12 px-4">
                        <img src={img} alt="..." className="shadow-lg rounded-full w-15 h-20 align-middle border-none" />
                    </div>
                </div>
                <p className='text-yellow-500 text-center p-2'><small>Rating: {rating}</small></p>

                <div className="text-center">
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className="text-slate-500">{comment}</p>
                </div>

            </div>
        </div>
    );
};

export default HomeReviewContainer;