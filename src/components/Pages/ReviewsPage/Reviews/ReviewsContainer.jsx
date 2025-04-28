import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { getReviews } from '../../../../redux/reviewsReducer';

class ReviewsContainer extends React.Component {
    componentDidMount() {
        this.props.getReviews();
    }

    render() {
        return (
            <Reviews reviews={ this.props.reviews } />
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        reviews: state.reviews.reviews
    }
};

export default compose(
    connect(mapStateToProps, { getReviews })
)(ReviewsContainer);
