import classes from './Header.module.css';
import logo from './../../../assets/images/логотип.png';
import personDefault from './../../../assets/images/person.jpg';
import getLinks from '../../../utils/getLinks';

const Header = ({ links, isAuth, surname, name, patronymic, img }) => {
    const fullName = isAuth && `${surname} ${name.at(0)}. ${patronymic ? patronymic.at(0) + '.' : ''}`;
    let { leftLinks, rightLinks } = {...getLinks(links)};
    return (
        <header className={ classes.header }>
            <div className='container'>
                <nav className={ classes.items }>
                    <img src={ logo } className={ classes.logo } alt="logo" />
                    <div className={ classes.drop }>
                        <li className={ classes.burgerButton }><a href="#" className={ classes.link }>&#9776;</a></li>
                        <div className={ classes.item + ' ' + classes.links }>{ leftLinks }</div>
                    </div>
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
