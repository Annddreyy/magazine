import { productsAPI } from '../../api/api';
import { getFavorityProducts, setFavorityProducts } from '../../utils/workingWithLocalStorage';
import { addFavorityProduct, deleteFavorityProduct, setFavorityProductsAC, setFavorityStatus, setIsFecthing, setProductInformation, setProductsInformation } from './productsReducer';

export const getProduct = (productId) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let product = await productsAPI.getProduct(productId);
    dispatch(setIsFecthing(false));
    dispatch(setProductInformation(product));
};

export const getProducts = (page, size) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let products = await productsAPI.getProducts(page, size);
    let favorityProducts = getFavorityProducts();
    products.products.forEach(product => favorityProducts.find(p => p.id === product.id ) ? product.favority = true : product.favority = false);
    dispatch(setIsFecthing(false));
    dispatch(setProductsInformation(products));
};

export const getFavorityThunk = () => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let products = getFavorityProducts();
    dispatch(setIsFecthing(false));
    dispatch(setFavorityProductsAC(products, products.length));
};

export const setFavority = (productId) => (dispatch, getState) => {
    dispatch(setFavorityStatus(productId));
    dispatch(addFavorityProduct(productId));
    setFavorityProducts(getState().products.favorityProducts);
};

export const deleteFavority = (productId) => (dispatch, getState) => {
    console.log( productId );
    let s1 = getState().products.favorityProducts;
    console.log( s1 );
    dispatch(setFavorityStatus(productId));
    dispatch(deleteFavorityProduct(productId));
    let s2 = getState().products.favorityProducts;
    console.log( s2 );
    setFavorityProducts(getState().products.favorityProducts);
};
