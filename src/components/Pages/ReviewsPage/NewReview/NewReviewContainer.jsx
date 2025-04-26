import { connect } from "react-redux";
import NewReview from "./NewReview"
import { addReview } from "../../../../redux/reviewsReducer";

const NewReviewContainer = (props) => {
    return (
        <NewReview {...props} />
    )
};

export default connect(null, { addReview })(NewReviewContainer);