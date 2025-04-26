const INCREASE_PRODUCT = 'magazine/bin/INCREASE_PRODUCT';
const DECREASE_PRODUCT = 'magazine/bin/DECREASE_PRODUCT';
const DELETE_PRODUCT = 'magazine/bin/DELETE_PRODUCT';

const initialState = {
    products: [
        { id: 1, title: 'title 1', price: 1470, count: 5 },
        { id: 2, title: 'title 2', price: 1470, count: 5 },
        { id: 3, title: 'title 3', price: 1470, count: 5 },
        { id: 4, title: 'title 4', price: 1470, count: 5 },
        { id: 5, title: 'title 5', price: 1470, count: 5 },
        { id: 6, title: 'title 6', price: 1470, count: 5 },
        { id: 7, title: 'title 7', price: 1470, count: 5 }
    ]
};

const binReducer = (state = initialState, action) => {
    switch(action.type) {
    case INCREASE_PRODUCT:
        return {
            ...state,
            products: state.products.map(product => 
                product.id === action.productId 
                    ? {...product, count: product.count + 1}
                    : product
            )
        };
    case DECREASE_PRODUCT:
        return {
            ...state,
            products: state.products.map(product => 
                product.id === action.productId && product.count > 1
                    ? {...product, count: product.count - 1 }
                    : product
            )
        };
    case DELETE_PRODUCT:
        return {
            ...state,
            products: state.products.filter(product => product.id !== action.productId)
        };
    default:
        return state;
    }
};

export const increaseProduct = (productId) => (dispatch) => {
    // TODO - здесь будет запрос на обновление количества в localStorage
    dispatch(increaseProductActionCreator(productId));
};
export const  decreaseProduct = (productId) => (dispatch) => {
    dispatch(decreaseProductActionCreator(productId));
};
export const deleteProduct = (productId) => (dispatch) => {
    dispatch(deleteProductActionCreator(productId));
};

export const increaseProductActionCreator = (productId) => ({ type: INCREASE_PRODUCT, productId });
export const decreaseProductActionCreator = (productId) => ({ type: DECREASE_PRODUCT, productId });
export const deleteProductActionCreator = (productId) => ({ type: DELETE_PRODUCT, productId });

export default binReducer;
