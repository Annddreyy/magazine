import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://koreyan-store-api-andrey2211.amvera.io/api/v1/'
});

export const productsAPI = {
    getProduct(productId) {
        return instance.get(`products/${productId}`)
            .then(response => response.data);
    }
};
