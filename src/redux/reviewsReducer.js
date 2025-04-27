import { reviewsAPI } from '../api/api';

const ADD_REVIEW_MESSAGE = 'ADD_REVIEW_MESSAGE';
const SET_REVIEWS = 'SET_REVIEWS';

const initialState = {
    reviews: []
};

const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
    case ADD_REVIEW_MESSAGE:
        return {
            ...state,
            reviews: [...state.reviews, { 
                id: 6, 
                userImg: null, 
                fullname: 'Жуков И. И.', 
                text: action.text
            }]
        };
    case SET_REVIEWS:
        return {
            ...state,
            reviews: action.reviews
        };
    default:
        return state;
    }
};

export const getReviews = () => async(dispatch) => {
    let reviews = await reviewsAPI.getReviews();
    dispatch(setReviews(reviews));
};
export const addReview = (text) => (dispatch) => {
    dispatch(addReviewMessage(text));
};

export const addReviewMessage = (text) => ({ type: ADD_REVIEW_MESSAGE, text });
export const setReviews = (reviews) => ({ type: SET_REVIEWS, reviews });

export default reviewsReducer;
