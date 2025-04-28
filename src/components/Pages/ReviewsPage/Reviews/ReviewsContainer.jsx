import { connect } from "react-redux";
import Reviews from "./Reviews";
import React from "react";
import { getReviews } from "../../../../redux/reviewsReducer";
import { compose } from "redux";
import withLoader from "../../../../hoc/withLoader";

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
