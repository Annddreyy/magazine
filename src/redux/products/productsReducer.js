const SET_FAVORITY = 'magazine/products/SET_FAVORITY';
const SET_PRODUCT_INFORMATION = 'magazine/products/SET_PRODUCT_INFORMATION';
const SET_PRODUCTS_INFORMATION = 'magazine/products/SET_PRODUCTS_INFORMATION';
const SET_CURRENT_PAGE = 'magazine/products/SET_CURRENT_PAGE';
const ADD_FAVORITY_PRODUCT = 'magazine/products/ADD_FAVORITY_PRODUCT';
const SET_IS_FETCHING = 'magazine/products/SET_IS_FETCHING';
const SET_FAVORITY_PRODUCTS_INFORMATION = 'magazine/products/SET_FAVORITY_PRODUCTS_INFORMATION';
const DELETE_FAVORITY_PRODUCT = 'magazine/products/DELETE_FAVORITY_PRODUCT';

const initialState = {
    totalProductsCount: 0,
    totalFavorityCount: 0,
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
    case SET_FAVORITY_PRODUCTS_INFORMATION:
        return {
            ...state,
            favorityProducts: action.favorityProducts,
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
            favorityProducts: [...state.favorityProducts, state.products.find(product => product.id === action.productId)]
        };
    case DELETE_FAVORITY_PRODUCT:
        return {
            ...state,
            favorityProducts: state.favorityProducts.filter(product => product.id !== action.productId)
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

export const setFavorityStatus = (productId) => ({ type: SET_FAVORITY, productId });

export const addFavorityProduct = (productId) => ({ type: ADD_FAVORITY_PRODUCT, productId });
export const deleteFavorityProduct = (productId) => ({ type: DELETE_FAVORITY_PRODUCT, productId });

export const setProductsInformation = (information) => ({ type: SET_PRODUCTS_INFORMATION, products: information.products, totalSize: information['total_size'] });
export const setFavorityProductsAC = (favorityProducts, totalFavorityCount) => ({ type: SET_FAVORITY_PRODUCTS_INFORMATION, favorityProducts, totalFavorityCount });

export const setProductInformation = (product) => ({ type: SET_PRODUCT_INFORMATION, product });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsFecthing = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });


export default productsReducer;
