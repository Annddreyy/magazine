import { reviewsAPI } from './../../api/api';
import { addReviewMessage, setIsFetching, setReviews } from './reviewsReducer';

export const getReviews = (page, size) => async(dispatch) => {
    dispatch(setIsFetching(true));
    let reviews = await reviewsAPI.getReviews(page, size);
    dispatch(setIsFetching(false));
    dispatch(setReviews(reviews));
};
export const addReview = (user, comment, grade) => async(dispatch) => {
    await reviewsAPI.addReview(1, comment, grade);
    dispatch(addReviewMessage(user, comment, grade));
};
