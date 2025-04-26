const ADD_REVIEW_MESSAGE = 'ADD_REVIEW_MESSAGE';

const initialState = {
    reviews: [
        { id: 1, userImg: null, fullname: 'Петров И. И.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis fugiat ea beatae similique, quaerat mollitia harum nihil sint, a blanditiis quas adipisci hic voluptatibus, suscipit maxime rerum. Amet, voluptas.' },
        { id: 2, userImg: null, fullname: 'Иванов И. И.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis fugiat ea beatae similique, quaerat mollitia harum nihil sint, a blanditiis quas adipisci hic voluptatibus, suscipit maxime rerum. Amet, voluptas.' },
        { id: 3, userImg: null, fullname: 'Сидоров И. И.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis fugiat ea beatae similique, quaerat mollitia harum nihil sint, a blanditiis quas adipisci hic voluptatibus, suscipit maxime rerum. Amet, voluptas.' },
        { id: 4, userImg: null, fullname: 'Беляев И. И.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis fugiat ea beatae similique, quaerat mollitia harum nihil sint, a blanditiis quas adipisci hic voluptatibus, suscipit maxime rerum. Amet, voluptas.' },
        { id: 5, userImg: null, fullname: 'Гордеев И. И.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis fugiat ea beatae similique, quaerat mollitia harum nihil sint, a blanditiis quas adipisci hic voluptatibus, suscipit maxime rerum. Amet, voluptas.' },
        { id: 6, userImg: null, fullname: 'Жуков И. И.', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis fugiat ea beatae similique, quaerat mollitia harum nihil sint, a blanditiis quas adipisci hic voluptatibus, suscipit maxime rerum. Amet, voluptas.' }
    ]
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
    default:
        return state;
    }
};

export const addReview = (text) => (dispatch) => {
    dispatch(addReviewMessage(text));
};

export const addReviewMessage = (text) => ({ type: ADD_REVIEW_MESSAGE, text });

export default reviewsReducer;
