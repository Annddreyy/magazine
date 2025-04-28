import getLinks from '../../../utils/getLinks';
import classes from './Header.module.css';
import choosePhoto from '../../../utils/choosePhoto';
import generateFullName from '../../../utils/generateFullName';
import logo from './../../../assets/images/logo.png';
import personDefault from './../../../assets/images/person.jpg';
import { PERSON_DEFAULT_URL } from '../../../config/vars';

const Header = ({ links, isAuth, surname, name, patronymic, img }) => {
    let { leftLinks, rightLinks } = {...getLinks(links)};
    
    const photo = choosePhoto(img, personDefault, PERSON_DEFAULT_URL);
    const fullName = isAuth && generateFullName(surname, name, patronymic);

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
