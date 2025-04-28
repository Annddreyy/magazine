import { reviewsAPI } from '../api/api';

const ADD_REVIEW_MESSAGE = 'ADD_REVIEW_MESSAGE';
const SET_REVIEWS = 'SET_REVIEWS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
    reviews: [],
    isFetching: false
};

const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
    case ADD_REVIEW_MESSAGE:
        debugger;
        return {
            ...state,
            reviews: [...state.reviews, { 
                id: 6, 
                userImg: null, 
                user: action.user, 
                comment: action.comment,
                grade: 3
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
export const addReview = (comment, user) => (dispatch) => {
    dispatch(addReviewMessage(comment, user));
};

export const addReviewMessage = (comment, user) => ({ type: ADD_REVIEW_MESSAGE, comment, user });
export const setReviews = (reviews) => ({ type: SET_REVIEWS, reviews });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default reviewsReducer;
