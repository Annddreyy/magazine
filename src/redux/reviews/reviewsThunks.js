import { reviewsAPI } from './../../api/api';
import { addReviewMessage, setIsFetching, setReviews } from './reviewsReducer';

export const getReviews = (page, size) => async(dispatch) => {
    dispatch(setIsFetching(true));
    let reviews = await reviewsAPI.getReviews(page, size);
    dispatch(setIsFetching(false));
    dispatch(setReviews(reviews));
};
export const addReview = (id, fullname, img, comment, grade) => async(dispatch) => {
    await reviewsAPI.addReview(id, comment, grade);
    dispatch(addReviewMessage(id, fullname, img, comment, grade));
};
