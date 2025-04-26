import Review from "./Review/Review";
import classes from './Reviews.module.css';

const Reviews = ({ reviews }) => {
    const reviewsElem = reviews.map(review => <Review {...review} key={ review.id } />)
    return (
        <section className='container'>
            <h2>Отзывы</h2>
            <div className={ classes.items }>
                { reviewsElem }
            </div>
        </section>
    )
};

export default Reviews;