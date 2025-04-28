import { productsAPI } from '../api/api';
import { setFavorityProducts } from '../utils/workingWithLocalStorage';

const SET_FAVORITY = 'magazine/products/SET_FAVORITY';
const SET_PRODUCT_INFORMATION = 'magazine/products/SET_PRODUCT_INFORMATION';
const SET_PRODUCTS_INFORMATION = 'magazine/products/SET_PRODUCTS_INFORMATION';
const SET_CURRENT_PAGE = 'magazine/products/SET_CURRENT_PAGE';
const ADD_FAVORITY_PRODUCT = 'magazine/products/ADD_FAVORITY_PRODUCT';
const SET_IS_FETCHING = 'magazine/products/SET_IS_FETCHING';

const initialState = {
    totalProductsCount: 0,
    pageSize: 12,
    currentPage: 1,

    products: [],
    favorityProducts: [],
    
    product: null,

    isFetching: false
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_FAVORITY:
        return {
            ...state,
            products: state.products.map(product => 
                product.id === action.productId 
                    ? {...product, favority: !product.favority}
                    : product
            )
        };
    case SET_PRODUCT_INFORMATION:
        return {
            ...state,
            product: action.product
        };
    case SET_PRODUCTS_INFORMATION:
        return {
            ...state,
            products: action.products,
            totalProductsCount: action.totalSize
        };
    case SET_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.currentPage
        };
    case ADD_FAVORITY_PRODUCT:
        return {
            ...state,
            favorityProducts: [...state.favorityProducts, state.products.find(product => product.id == action.productId)]
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

export const getProduct = (productId) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let product = await productsAPI.getProduct(productId);
    dispatch(setIsFecthing(false));
    dispatch(setProductInformation(product));
};
export const getProducts = (page, size) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let products = await productsAPI.getProducts(page, size);
    dispatch(setIsFecthing(false));
    dispatch(setProductsInformation(products));
};
export const setFavority = (productId) => (dispatch, getState) => {
    dispatch(setFavorityStatus(productId));
    dispatch(addFavorityProduct(productId));
    setFavorityProducts(getState().products.products.filter(product => product.favority));
};

export const setFavorityStatus = (productId) => ({ type: SET_FAVORITY, productId });
export const addFavorityProduct = (productId) => ({ type: ADD_FAVORITY_PRODUCT, productId });
export const setProductsInformation = (information) => ({ type: SET_PRODUCTS_INFORMATION, products: information.products, totalSize: information['total_size'] });
export const setProductInformation = (product) => ({ type: SET_PRODUCT_INFORMATION, product });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsFecthing = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default productsReducer;
