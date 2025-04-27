import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './../../../assets/images/логотип.png';
import personDefault from './../../../assets/images/person.jpg';

const Header = ({ links, isAuth, surname, name, patronymic, img }) => {
    const fullName = isAuth && `${surname} ${name.at(0)}. ${patronymic ? patronymic.at(0) + '.' : ''}`;
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
                    {
                        isAuth
                        ?
                        <div className={ classes.user }>
                            <img src={ img || personDefault } className={ classes.userImg } alt="" />
                            <span className={ classes.fullname }>{ fullName }</span>
                            <button className={ classes.logout }>Выйти</button>
                        </div>
                        :
                        <div className={ classes.item }>{ rightLinks }</div>
                    }
                </nav>
            </div>
        </header>
    )
};

export default Header;
