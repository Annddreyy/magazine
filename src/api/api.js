import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://magazine-api-andrey2211.amvera.io/api/v1/'
});

export const productsAPI = {
    getProducts() {
        return instance.get('products')
            .then(response => response.data);
    },
    getProduct(productId) {
        return instance.get(`products/${productId}`)
            .then(response => response.data);
    }
};
