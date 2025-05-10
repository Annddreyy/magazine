import { productsAPI } from '../../api/api';
import { getFavorityProducts } from '../../utils/workingWithLocalStorage';
import { setIsFecthing, setProductInformation, setProductsInformation } from './productsReducer';

export const getProduct = (productId) => async(dispatch) => {
    dispatch(setIsFecthing(true));
    let product = await productsAPI.getProduct(productId);
    dispatch(setIsFecthing(false));
    dispatch(setProductInformation(product));
};

export const getProducts = (page, size) => async(dispatch, getState) => {
    dispatch(setIsFecthing(true));
    let category = getState().products.category;
    let sortBy = getState().products.sortBy;
    let products = await productsAPI.getProducts({page, size, category, sortBy});
    let favorityProducts = getFavorityProducts();
    products.products.forEach(product => favorityProducts.find(p => p.id === product.id ) ? product.favority = true : product.favority = false);
    dispatch(setIsFecthing(false));
    dispatch(setProductsInformation(products));
};

export const deleteProduct = (title) => async(dispatch) => {
    let response = await productsAPI.deleteProduct(title);
    if (response.code === 200) {
        alert('Товар успешно удален!');
    } else {
        console.log( response );
    }
};

export const addProduct = (product) => async(dispatch) => {
    let response = await productsAPI.addProduct(product);
    if (response.code === 200) {
        alert('Товар успешно добавлен!');
    } else {
        console.log( response );
    }
};

export const updateProduct = (product) => async(dispatch) => {
    console.log( 2 );
    let response = await productsAPI.updateProduct(product);
    if (response.code === 200) {
        alert('Товар успешно обновлен!');
    } else {
        console.log( response );
    }
};
