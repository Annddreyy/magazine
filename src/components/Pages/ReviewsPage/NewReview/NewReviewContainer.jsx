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
        user: state.auth.isAuth && `${state.auth.surname} ${state.auth.name.at(0)}. ${state.auth.patronymic || state.auth.patronymic.at(0)}.` 
    }
};

export default connect(mapStateToProps, { addReview })(NewReviewContainer);