import { reviewsAPI } from '../api/api';

const ADD_REVIEW_MESSAGE = 'magazine/reviews/ADD_REVIEW_MESSAGE';
const SET_REVIEWS = 'magazine/reviews/SET_REVIEWS';
const SET_IS_FETCHING = 'magazine/reviews/SET_IS_FETCHING';

const initialState = {
    reviews: [],
    isFetching: false
};

const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
    case ADD_REVIEW_MESSAGE:
        return {
            ...state,
            reviews: [...state.reviews, { 
                id: 120, 
                userImg: null, 
                user: action.user, 
                comment: action.comment,
                grade: action.grade
            }]
        };
    case SET_REVIEWS:
        return {
            ...state,
            reviews: action.reviews
        };
    case SET_IS_FETCHING:
        return {
            ...state,
            isFetching: action.isFetching
        };
    default:
        return state;
    }
};

export const getReviews = () => async(dispatch) => {
    dispatch(setIsFetching(true));
    let reviews = await reviewsAPI.getReviews();
    dispatch(setIsFetching(false));
    dispatch(setReviews(reviews));
};
export const addReview = (user, comment, grade) => async(dispatch) => {
    await reviewsAPI.addReview(1, comment, grade);
    dispatch(addReviewMessage(user, comment, grade));
};

export const addReviewMessage = (comment, user) => ({ type: ADD_REVIEW_MESSAGE, comment, user });
export const setReviews = (reviews) => ({ type: SET_REVIEWS, reviews });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default reviewsReducer;
