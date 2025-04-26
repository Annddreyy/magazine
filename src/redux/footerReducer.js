const initialState = {
    links: [
        { link: '/', text: 'Главная' },
        { link: '/about', text: 'О нас' },
        { link: '/catalog', text: 'Каталог товаров' },
        { link: '/contacts', text: 'Контакты' },
        { link: '/reviews', text: 'Отзывы' },
        { link: '/bin', text: 'Корзина' },
        { link: '/favorites', text: 'Избранное' }, 
        { link: '/confidentiality', text: 'Политика конфиденциальности', isRightLink: true },
        { link: '/personal_data', text: 'Политика обработки персональных данных', isRightLink: true }
    ]
};

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

export default footerReducer;
