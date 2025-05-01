const SET_LAST_PAGE = 'magazine/app/SET_LAST_PAGE';

const initialState = {
    lastPage: '/'
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_LAST_PAGE:
        debugger;
        return {
            ...state,
            lastPage: action.lastPage
        };
    default:
        return state;
    }
};

export const setLastPage = (lastPage) => ({ type: SET_LAST_PAGE, lastPage });

export default appReducer;
