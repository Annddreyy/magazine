const SET_CURRENT_PAGE = 'magazine/favority/SET_CURRENT_PAGE';
const ADD_FAVORITY_PRODUCT = 'magazine/favority/ADD_FAVORITY_PRODUCT';
const SET_IS_FETCHING = 'magazine/favority/SET_IS_FETCHING';
const SET_FAVORITY_PRODUCTS_INFORMATION = 'magazine/favority/SET_FAVORITY_PRODUCTS_INFORMATION';
const DELETE_FAVORITY_PRODUCT = 'magazine/favority/DELETE_FAVORITY_PRODUCT';

const initialState = {
    favority: [],
    pageSize: 12,
    currentPage: 1,
    totalFavorityCount: 0
};

const favorityReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_FAVORITY_PRODUCTS_INFORMATION:
        return {
            ...state,
            favority: action.favorityProducts,
            totalFavorityCount: action.totalFavorityCount
        };
    case SET_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.currentPage
        };
    case ADD_FAVORITY_PRODUCT:
        return {
            ...state,
            favority: [...state.favority, action.product]
        };
    case DELETE_FAVORITY_PRODUCT:
        return {
            ...state,
            favority: state.favority.filter(product => product.id !== action.productId)
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

export const setIsFecthing = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const addFavorityProduct = (product) => ({ type: ADD_FAVORITY_PRODUCT, product });
export const deleteFavorityProduct = (productId) => ({ type: DELETE_FAVORITY_PRODUCT, productId });

export const setFavorityProductsAC = (favorityProducts, totalFavorityCount) => ({ type: SET_FAVORITY_PRODUCTS_INFORMATION, favorityProducts, totalFavorityCount });

export default favorityReducer;
