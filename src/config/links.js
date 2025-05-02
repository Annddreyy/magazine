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
    { id: 9, link: 'https://docs.google.com/document/d/1l2z6ZJv1pCC8bsN3dFJrtdddgQCRHiRMk_dMWpU0a5Q/edit?tab=t.0#heading=h.lu913s84dd7t', text: 'Политика конфиденциальности', elem: [Elements.FOOTER], isRightLink: true },
    { id: 10, link: 'https://drive.google.com/file/d/1-poWVvFrnM0BAfZSB4FrzXbAbi3affwE/view?usp=drive_link', text: 'Инструкция по использованию', elem: [Elements.FOOTER], isRightLink: true }
];
