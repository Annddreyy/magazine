import { connect } from 'react-redux';
import Review from './Review/Review';
import classes from './Reviews.module.css';
import withLoader from '../../../../hoc/withLoader';
import { compose } from 'redux';

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

const mapStateToProps = (state) => {
    return {
        isFetching: state.reviews.isFetching
    }
}

export default compose(
    connect(mapStateToProps),
    withLoader
)(Reviews);