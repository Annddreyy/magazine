import axios from 'axios';
import { BASE_URL } from '../config/vars';

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
});

export const usersAPI = {
    getUser(userId) {
        return instance.get(`users/${userId}`)
            .then(response => response.data);
    },
    auth(login, password) {
        return instance.post('auth', { login, password })
            .then(response => response.data);
    },
    logout() {
        return instance.delete('auth');
    },
    registration(surname, name, patronymic, login, password, img_path) {
        if (patronymic && img_path) {
            return instance.post('registration', { surname, name, patronymic, login, password, img_path });
        } else if (img_path) {
            return instance.post('registration', { surname, name, login, password, img_path });
        } else if (patronymic) {
            return instance.post('registration', { surname, name, login, password, patronymic });
        } else {
            return instance.post('registration', { surname, name, login, password });
        }
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
    getReviews(page, size) {
        return instance.get(`reviews?page=${page}&size=${size}`)
            .then(response => response.data);
    },
    addReview(id, comment, grade) {
        return instance.post('review', { id, comment, grade });
    }
};
