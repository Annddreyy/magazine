import { setIsFecthing, addFavorityProduct, deleteFavorityProduct, setFavorityProductsAC, setCurrentPage } from './favorityReducer';
import { setFavorityStatus } from '../products/productsReducer';
import { addFavorityProductLS, deleteFavorityProductLS, getFavorityProducts } from '../../utils/workingWithLocalStorage';

export const getFavorityThunk = (currentPage, pageSize) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let products = getFavorityProducts();
    dispatch(setIsFecthing(false));

    let length = products.length;
    if (length <= (currentPage - 1) * pageSize && currentPage > 1) {
        currentPage -= 1;
        dispatch(setCurrentPage(currentPage));
    }
    let left = (currentPage - 1) * pageSize + 1;
    let right = currentPage * pageSize;
    products = products.slice(left - 1, right);

    dispatch(setFavorityProductsAC(products, length));
};

export const setFavority = (product) => (dispatch) => {
    dispatch(setFavorityStatus(product.id));
    dispatch(addFavorityProduct(product));

    addFavorityProductLS(product);
};

export const deleteFavority = (productId) => (dispatch, getState) => {
    dispatch(setFavorityStatus(productId));
    dispatch(deleteFavorityProduct(productId));
    deleteFavorityProductLS(productId);

    let currentPage = getState().favority.currentPage;
    let pageSize = getState().favority.pageSize;
    
    dispatch(getFavorityThunk(currentPage, pageSize));
};
