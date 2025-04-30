import { connect } from 'react-redux';
import NewReview from './NewReview'
import { addReview } from '../../../../redux/reviews/reviewsThunks';
import { getImg, getIsAuth, getName, getPatronymic, getSurname } from '../../../../redux/auth/authSelectors';

const NewReviewContainer = (props) => {
    return (
        <NewReview {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        surname: getSurname(state),
        name: getName(state),
        patronymic: getPatronymic(state),
        img: getImg(state)
    }
};

export default connect(mapStateToProps, { addReview })(NewReviewContainer);