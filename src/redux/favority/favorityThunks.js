import { setIsFecthing, addFavorityProduct, deleteFavorityProduct, setFavorityProductsAC, setCurrentPage } from './favorityReducer';
import { setFavorityStatus } from '../products/productsReducer';
import { addFavorityProductLS, deleteFavorityProductLS, getFavorityProducts } from '../../utils/workingWithLocalStorage';
import { sortByCategories } from '../../config/sort';

export const getFavorityThunk = (currentPage, pageSize, category = null, sortBy = null) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let products = getFavorityProducts();
    dispatch(setIsFecthing(false));

    if (sortBy) {
        const sortTypes = new Map(sortByCategories.map(c => [c.value, c.id]));
        const sortTypeID = sortTypes.get(sortBy);
        switch (sortTypeID) {
        case 1:
            products = products.sort((a, b) => b.price - a.price);
            break;
        case 2:
            products = products.sort((a, b) => a.price - b.price);
            break;
        case 3:
            products = products.sort((a, b) => b.grade - a.grade);
            break;
        default:
            products = products.sort((a, b) => a.grade - b.grade);
        }
    }

    if (category) {
        products = products.filter(product => product.category === category);
    }

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
    let category = getState().favority.category;
    let sortBy = getState().favority.sortBy;
    
    dispatch(getFavorityThunk(currentPage, pageSize, category, sortBy));
};
