import { getBinProducts, setBinProducts } from '../../utils/workingWithLocalStorage';
import { addProductActionCreator, decreaseProductActionCreator, deleteProductActionCreator, increaseProductActionCreator, setProductsActionCreator } from './binReducer';

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
    let products = getBinProducts();
    let findProduct = products.filter(p => p.id === product.id);
    if (findProduct.length > 0) {
        dispatch(increaseProductActionCreator(product.id));
    } else {
        dispatch(addProductActionCreator(product));
    }
    setBinProducts(getState().bin.products);
};
export const deleteProduct = (productId) => (dispatch, getState) => {
    dispatch(deleteProductActionCreator(productId));
    setBinProducts(getState().bin.products);
};
