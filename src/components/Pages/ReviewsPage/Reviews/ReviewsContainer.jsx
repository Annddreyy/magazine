import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import withPaginator from './../../../../hoc/withPaginator';
import { setCurrentPage } from '../../../../redux/reviews/reviewsReducer';
import { getReviews } from '../../../../redux/reviews/reviewsThunks';
import { getCurrentPage, getPageSize, getReviewsSelector, getTotalReviews } from '../../../../redux/reviews/reviewsSelectors';

class ReviewsContainer extends React.Component {
    componentDidMount() {
        this.props.getReviews(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevState) {
        if (prevState.currentPage !== this.props.currentPage) {
            this.props.getReviews(this.props.currentPage, this.props.pageSize);
        }
    }

    render() {
        return <Reviews reviews={ this.props.reviews } />
    }
}

const mapStateToProps = (state) => {
    return { 
        reviews: getReviewsSelector(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalReviews(state)
    }
};

export default compose(
    connect(mapStateToProps, { getReviews, setCurrentPage }),
    withPaginator
)(ReviewsContainer);
