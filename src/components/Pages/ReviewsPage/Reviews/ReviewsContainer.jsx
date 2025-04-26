import { connect } from "react-redux";
import Reviews from "./Reviews";

const ReviewsContainer = (props) => {
    return (
        <Reviews {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews
    }
};

export default connect(mapStateToProps)(ReviewsContainer);
