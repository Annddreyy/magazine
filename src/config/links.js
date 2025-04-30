const Elements = {
    HEADER: 'HEADER',
    FOOTER: 'FOOTER'
};

export const links = [
    { id: 1, link: '/', text: 'Главная', elem: [Elements.HEADER, Elements.FOOTER] },
    { id: 2, link: '/about', text: 'О нас', elem: [Elements.HEADER, Elements.FOOTER] },
    { id: 3, link: '/catalog', text: 'Каталог товаров', elem: [Elements.HEADER, Elements.FOOTER] },
    { id: 4, link: '/contacts', text: 'Контакты', elem: [Elements.HEADER, Elements.FOOTER] },
    { id: 5, link: '/reviews', text: 'Отзывы', elem: [Elements.HEADER, Elements.FOOTER] },
    { id: 6, link: '/bin', text: 'Корзина', elem: [Elements.HEADER, Elements.FOOTER] },
    { id: 7, link: '/favorites', text: 'Избранное', elem: [Elements.HEADER, Elements.FOOTER]  }, 
    { id: 8, link: '/login', text: 'Войти', elem: [Elements.HEADER], isRightLink: true },
    { id: 9, link: '/confidentiality', text: 'Политика конфиденциальности', elem: [Elements.FOOTER], isRightLink: true },
    { id: 10, link: '/personal_data', text: 'Политика обработки персональных данных', elem: [Elements.FOOTER], isRightLink: true }
];
