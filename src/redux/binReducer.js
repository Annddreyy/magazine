import { getBinProducts, setBinProducts } from '../utils/workingWithLocalStorage';

const SET_PRODUCTS = 'magazine/bin/SET_PRODUCTS';
const INCREASE_PRODUCT = 'magazine/bin/INCREASE_PRODUCT';
const DECREASE_PRODUCT = 'magazine/bin/DECREASE_PRODUCT';
const ADD_PRODUCT = 'magazine/bin/ADD_PRODUCT';
const DELETE_PRODUCT = 'magazine/bin/DELETE_PRODUCT';

const initialState = {
    products: []
};

const binReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_PRODUCTS:
        return {
            ...state,
            products: action.products
        };
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
    case ADD_PRODUCT:
        return {
            ...state,
            products: [...state.products, action.product]
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

export const getBinProductsList = () => (dispatch) => {
    dispatch(setProductsActionCreator(getBinProducts()));
};
export const increaseProduct = (productId) => (dispatch, getState) => {
    dispatch(increaseProductActionCreator(productId));
    setBinProducts(getState().bin.products);
};
export const decreaseProduct = (productId) => (dispatch, getState) => {
    dispatch(decreaseProductActionCreator(productId));
    setBinProducts(getState().bin.products);
};
export const addProduct = (product) => (dispatch, getState) => {
    dispatch(addProductActionCreator(product));
    setBinProducts(getState().bin.products);
};
export const deleteProduct = (productId) => (dispatch, getState) => {
    dispatch(deleteProductActionCreator(productId));
    setBinProducts(getState().bin.products);
};

export const setProductsActionCreator = (products) => ({ type: SET_PRODUCTS, products });
export const increaseProductActionCreator = (productId) => ({ type: INCREASE_PRODUCT, productId });
export const decreaseProductActionCreator = (productId) => ({ type: DECREASE_PRODUCT, productId });
export const addProductActionCreator = (product) => ({ type: ADD_PRODUCT, product });
export const deleteProductActionCreator = (productId) => ({ type: DELETE_PRODUCT, productId });

export default binReducer;
