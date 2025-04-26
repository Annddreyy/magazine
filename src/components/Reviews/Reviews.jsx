import Review from "./Review/Review";

const Reviews = ({ reviews }) => {
    const reviewsElem = reviews.map(review => <Review {...review} key={ review.id } />)
    return (
        <div>
            { reviewsElem }
        </div>
    )
};

export default Reviews;