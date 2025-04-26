const initialState = {
    links: [
        { link: '/', text: 'Главная' },
        { link: '/about', text: 'О нас' },
        { link: '/catalog', text: 'Каталог товаров' },
        { link: '/contacts', text: 'Контакты' },
        { link: '/reviews', text: 'Отзывы' },
        { link: '/bin', text: 'Корзина' },
        { link: '/favorites', text: 'Избранное' }, 
        { link: '/login', text: 'Войти', isRightLink: true }
    ]
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

export default headerReducer;
