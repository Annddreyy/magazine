const Elements = {
    HEADER: 'HEADER',
    FOOTER: 'FOOTER'
};

export const links = [
    { link: '/', text: 'Главная', elem: [Elements.HEADER, Elements.FOOTER] },
    { link: '/about', text: 'О нас', elem: [Elements.HEADER, Elements.FOOTER] },
    { link: '/catalog', text: 'Каталог товаров', elem: [Elements.HEADER, Elements.FOOTER] },
    { link: '/contacts', text: 'Контакты', elem: [Elements.HEADER, Elements.FOOTER] },
    { link: '/reviews', text: 'Отзывы', elem: [Elements.HEADER, Elements.FOOTER] },
    { link: '/bin', text: 'Корзина', elem: [Elements.HEADER, Elements.FOOTER] },
    { link: '/favorites', text: 'Избранное', elem: [Elements.HEADER, Elements.FOOTER]  }, 
    { link: '/login', text: 'Войти', elem: [Elements.HEADER], isRightLink: true },
    { link: '/confidentiality', text: 'Политика конфиденциальности', elem: [Elements.FOOTER], isRightLink: true },
    { link: '/personal_data', text: 'Политика обработки персональных данных', elem: [Elements.FOOTER], isRightLink: true }
];
