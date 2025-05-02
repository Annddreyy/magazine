import getLinks from '../../../utils/getLinks';
import choosePhoto from '../../../utils/choosePhoto';
import generateFullName from '../../../utils/generateFullName';
import { PERSON_DEFAULT_URL } from '../../../config/vars';
import classes from './Header.module.css';
import { logo } from '../../../config/images';
import { personDefault } from '../../../config/images';

const Header = ({ links, isAuth, logout, ...user }) => {
    let { leftLinks, rightLinks } = {...getLinks(links)};
    
    const photo = choosePhoto(user.img, personDefault, PERSON_DEFAULT_URL);
    const fullName = isAuth && generateFullName(user.surname, user.name, user.patronymic);

    return (
        <header className={ classes.header }>
            <div className='container'>
                <nav className={ classes.items }>
                    <img src={ logo } className={ classes.logo } alt="logo" />
                    <div className={ classes.drop }>
                        <li className={ classes.burgerButton }><span className={ classes.link }>&#9776;</span></li>
                        <div className={ classes.item + ' ' + classes.links }>{ leftLinks }</div>
                    </div>
                    {
                        isAuth
                        ?
                        <div className={ classes.user }>
                            <img src={ photo } className={ classes.userImg } alt="" />
                            <span className={ classes.fullname }>{ fullName }</span>
                            <button className={ classes.logout } onClick={ logout }>Выйти</button>
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
