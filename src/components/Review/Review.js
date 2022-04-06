import useReviews from '../../hooks/useReviews';
import CustomerReview from '../../hooks/CustomerReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();

    

    return (
        <div>
            <h2 className='text-3xl text-center m-5 text-orange-500'>Our Customer Reviews: {reviews.length}</h2>

            <div className='container mx-auto grid lg:grid-cols-3 gap-3'>
            {
                reviews.map(review => <CustomerReview key={review.id} review={review}></CustomerReview>)
            }
            </div>
        </div>
    );
};

export default Review;