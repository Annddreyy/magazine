import { productsAPI } from '../../api/api';
import { setFavorityProducts } from '../../utils/workingWithLocalStorage';
import { addFavorityProduct, setFavorityStatus, setIsFecthing, setProductInformation, setProductsInformation } from './productsReducer';

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
