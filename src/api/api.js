import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://magazine-api-andrey2211.amvera.io/api/v1/'
});

export const productsAPI = {
    getProducts(page, size) {
        debugger;
        return instance.get(`products?page=${page}&size=${size}`)
            .then(response => response.data);
    },
    getProduct(productId) {
        return instance.get(`products/${productId}`)
            .then(response => response.data);
    }
};
