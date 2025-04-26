import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './../../../assets/images/логотип.png'

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
        <header className={ classes.header }>
            <div className='container'>
                <nav className={ classes.items }>
                    <img src={ logo } className={ classes.logo } alt="logo" />
                    <div className={ classes.item }>{ leftLinks }</div>
                    <div className={ classes.item }>{ rightLinks }</div>
                </nav>
            </div>
        </header>
    )
};

export default Header;
