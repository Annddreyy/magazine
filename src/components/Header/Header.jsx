import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './../../assets/images/логотип.png'

const Header = ({ links }) => {
    const leftLinks = links
        .filter(link => !link.isRightLink)
        .map(link => 
            <NavLink to={ link.link } className={ classes.link }>{ link.text }</NavLink>
        );

    const rightLinks = links
        .filter(link => link.isRightLink)
        .map(link => 
            <NavLink to={ link.link } className={ classes.link }>{ link.text }</NavLink>
        );

    return (
        <header className={ classes.items }>
            <div className={ classes.item }>
                <img src={ logo } className={ classes.logo } alt="logo" />
                { leftLinks }
            </div>
            <div className={ classes.item }>{ rightLinks }</div>
        </header>
    )
};

export default Header;
