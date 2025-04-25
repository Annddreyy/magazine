import classes from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/логотип.png';

const links = [
    { link: '/about', text: 'О нас' },
    { link: '/catalog', text: 'Каталог товаров' },
    { link: '/contacts', text: 'Контакты' },
    { link: '/rewiews', text: 'Отзывы' },
    { link: '/bin', text: 'Корзина' },
    { link: '/favorites', text: 'Избранное' }, 
    { link: '/confidentiality', text: 'Политика конфиденциальности', isRightLink: true },
    { link: '/personal_data', text: 'Политика обработки персональных данных', isRightLink: true }
];


const Footer = () => {
    let leftLinks = links
                .filter(link => !link.isRightLink)
                .map(link => 
                    <NavLink to={ link.link } className={ classes.link }>{ link.text }</NavLink>
                );
    
    let rightLinks = links
                .filter(link => link.isRightLink)
                .map(link => 
                    <NavLink to={ link.link } className={ classes.link }>{ link.text }</NavLink>
                );
    
    return (
        <footer className={ classes.footer }>
            <div className='container'>
                <div className={ classes.topPart }>
                    <div className={ classes.links }>
                        <div className={ classes.items }>
                            { leftLinks }
                        </div>
                        <div className={ classes.items }>
                            { rightLinks }
                        </div>
                    </div>
                    <img src={ logo } alt="Логотип" />
                </div>
                <p className={ classes.copyright }>© 2025 - Emilia, все права защищены</p>
            </div>
        </footer>
    )
};

export default Footer;