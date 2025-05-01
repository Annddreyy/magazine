import { connect } from 'react-redux';
import NewReview from './NewReview'
import { addReview, getReviews } from '../../../../redux/reviews/reviewsThunks';
import { getId, getImg, getIsAuth, getName, getPatronymic, getSurname } from '../../../../redux/auth/authSelectors';
import { getCurrentPage, getPageSize } from '../../../../redux/reviews/reviewsSelectors';

const NewReviewContainer = (props) => {
    return (
        <NewReview {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isAuth: getIsAuth(state),
        id: getId(state),
        surname: getSurname(state),
        name: getName(state),
        patronymic: getPatronymic(state),
        img: getImg(state)
    }
};

export default connect(mapStateToProps, { addReview, getReviews })(NewReviewContainer);