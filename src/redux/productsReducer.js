import { productsAPI } from '../api/api';

const SET_FAVORITY = 'SET_FAVORITY';
const SET_PRODUCT_INFORMATION = 'SET_PRODUCT_INFORMATION';
const SET_PRODUCTS_INFORMATION = 'SET_PRODUCTS_INFORMATION';

const initialState = {
    totalProductsCount: 0,
    productsPerPage: 12,
    currentPage: 1,
    products: [],
    product: null
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
        debugger;
        return {
            ...state,
            products: action.products,
            totalProductsCount: action.totalSize
        };
    default:
        return state;
    }
};

export const getProduct = (productId) => async(dispatch) => {
    let product = await productsAPI.getProduct(productId);
    dispatch(setProductInformation(product));
};

export const getProducts = (page, size) => async(dispatch) => {
    let products = await productsAPI.getProducts(page, size);
    dispatch(setProductsInformation(products));
};

export const setFavorityStatus = (productId) => ({ type: SET_FAVORITY, productId });
export const setProductsInformation = (information) => ({ type: SET_PRODUCTS_INFORMATION, products: information.products, totalSize: information['total_size'] });
export const setProductInformation = (product) => ({ type: SET_PRODUCT_INFORMATION, product });

export default productsReducer;
