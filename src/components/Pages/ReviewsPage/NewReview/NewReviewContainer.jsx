import { connect } from "react-redux";
import NewReview from "./NewReview"
import { addReview } from "../../../../redux/reviewsReducer";

const NewReviewContainer = (props) => {
    return (
        <NewReview {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { addReview })(NewReviewContainer);