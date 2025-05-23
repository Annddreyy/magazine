import axios from 'axios';
import { categories, sortByCategories } from '../config/sort';
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

        const categoriesMap = new Map(categories.map(c => [c.value, c.id]));
        const categoryID = categoriesMap.get(category);

        const sortTypes = new Map(sortByCategories.map(c => [c.value, c.id]));
        const sortTypeID = sortTypes.get(sortBy);

        if (categoryID) {
            queryString += `&category=${categoryID}`;
        }
        if (sortTypeID) {
            queryString += `&sortBy=${sortTypeID}`;
        }
        
        let response = await instance.get(queryString);

        return response.data;
    },

    async getProduct(productId) {
        let response = await instance.get(`products/${productId}`);
        return response.data;
    },

    async getAllProducts() {
        let response = await instance.get('all-products');
        return response.data;
    },

    async deleteProduct(productTitle) {
        let response = await instance.delete(`product?title=${productTitle}`);
        return response.data;
    },

    async addProduct({title, img_path = '', price, status, description, compound, category}) {
        let response = await instance.post('product', {
            title,
            img_path,
            price,
            status,
            description,
            compound,
            category
        });
        return response.data;
    },

    async updateProduct({ selected: oldTitle, title, img_path, price, status = '', description, compound, category }) {
        let response = await instance.patch('product', {
            oldTitle,
            title,
            img_path,
            price,
            status,
            description,
            compound,
            category
        });
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
