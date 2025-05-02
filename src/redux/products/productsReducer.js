const SET_FAVORITY = 'magazine/favority/SET_FAVORITY';
const SET_PRODUCT_INFORMATION = 'magazine/products/SET_PRODUCT_INFORMATION';
const SET_PRODUCTS_INFORMATION = 'magazine/products/SET_PRODUCTS_INFORMATION';
const SET_CURRENT_PAGE = 'magazine/products/SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'magazine/products/SET_IS_FETCHING';

const initialState = {
    products: [],
    totalProductsCount: 0,
    pageSize: 12,
    currentPage: 1,
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
    case SET_IS_FETCHING:
        return {
            ...state,
            isFetching: action.isFetching
        };
    default:
        return state;
    }
};

export const setProductsInformation = (information) => ({ type: SET_PRODUCTS_INFORMATION, products: information.products, totalSize: information['total_size'] });
export const setProductInformation = (product) => ({ type: SET_PRODUCT_INFORMATION, product });
export const setFavorityStatus = (productId) => ({ type: SET_FAVORITY, productId });

export const setIsFecthing = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default productsReducer;
