import { productsAPI } from '../api/api';

const SET_FAVORITY = 'SET_FAVORITY';
const SET_PRODUCT_INFORMATION = 'SET_PRODUCT_INFORMATION';
const SET_PRODUCTS_INFORMATION = 'SET_PRODUCTS_INFORMATION';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    totalProductsCount: 0,
    pageSize: 12,
    currentPage: 2,
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
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default productsReducer;
