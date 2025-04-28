import axios from 'axios';
import { BASE_URL } from '../config/vars';

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
});

export const usersAPI = {
    getUsers() {
        return instance.get('users')
            .then(response => response.data);
    },
    auth(login, password) {
        return instance.post('auth', { login, password });
    },
    logout() {
        return instance.delete('auth');
    }
};

export const productsAPI = {
    getProducts(page, size) {
        return instance.get(`products?page=${page}&size=${size}`)
            .then(response => response.data);
    },
    getProduct(productId) {
        return instance.get(`products/${productId}`)
            .then(response => response.data);
    }
};

export const reviewsAPI = {
    getReviews() {
        return instance.get('reviews')
            .then(response => response.data);
    },
    addReview(id, comment, grade) {
        return instance.post('review', { id, comment, grade });
    }
};
