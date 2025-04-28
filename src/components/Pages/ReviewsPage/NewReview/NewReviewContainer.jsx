import { connect } from 'react-redux';
import NewReview from './NewReview'
import { addReview } from '../../../../redux/reviewsReducer';

const NewReviewContainer = (props) => {
    return (
        <NewReview {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        surname: state.auth.surname,
        name: state.auth.name,
        patronymic: state.auth.patronymic,
        img: state.auth.img
    }
};

export default connect(mapStateToProps, { addReview })(NewReviewContainer);