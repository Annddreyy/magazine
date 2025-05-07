import axios from 'axios';
import { BASE_URL } from '../config/vars';

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
});

export const usersAPI = {
    async getUser(userId) {
        let response = await instance.get(`users/${userId}`);
        return response.data;
    },
    async auth(login, password) {
        let response = await instance.post('auth', { login, password });
        return response.data;
    },
    logout() {
        return instance.delete('auth');
    },
    registration(surname, name, patronymic, login, password, img_path) {
        const data = { surname, name, login, password };
        if (patronymic) {
            data.patronymic = patronymic;
        }
        if (img_path) {
            data.img_path = img_path;
        }
        return instance.post('registration', data);
    }
};

export const productsAPI = {
    async getProducts({page, size, category, sortBy}) {
        let queryString = `products?page=${page}&size=${size}`;
        if (category) {
            queryString += `&category=${category}`;
        }
        if (sortBy) {
            queryString += `&sortBy=${sortBy}`;
        }
        let response = await instance.get(queryString);
        return response.data;
    },
    async getProduct(productId) {
        let response = await instance.get(`products/${productId}`);
        return response.data;
    }
};

export const reviewsAPI = {
    async getReviews(page, size) {
        let response = await instance.get(`reviews?page=${page}&size=${size}`);
        return response.data;
    },
    addReview(id, comment, grade) {
        return instance.post('review', { id, comment, grade });
    }
};
