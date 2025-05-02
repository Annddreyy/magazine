import { setIsFecthing, addFavorityProduct, deleteFavorityProduct, setFavorityProductsAC } from './favorityReducer';
import { setFavorityStatus } from '../products/productsReducer';
import { getFavorityProducts, setFavorityProducts } from '../../utils/workingWithLocalStorage';

export const getFavorityThunk = (currentPage, pageSize) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let products = getFavorityProducts();
    let length = products.length;
    let left = (currentPage - 1) * pageSize + 1;
    let right = currentPage * pageSize;
    products = products.slice(left - 1, right);
    dispatch(setIsFecthing(false));
    dispatch(setFavorityProductsAC(products, length));
};

export const setFavority = (product) => (dispatch, getState) => {
    dispatch(setFavorityStatus(product.id));
    dispatch(addFavorityProduct(product));
    setFavorityProducts(getState().favority.favority);
};

export const deleteFavority = (productId) => (dispatch, getState) => {
    dispatch(setFavorityStatus(productId));
    dispatch(deleteFavorityProduct(productId));
    setFavorityProducts(getState().favority.favority);
};
