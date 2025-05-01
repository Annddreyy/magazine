import { connect } from 'react-redux';
import Header from './Header';
import { links } from '../../../config/links';
import { getImg, getIsAuth, getName, getPatronymic, getSurname } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authThunks';

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
};

const mapStateToPpops = (state) => {
    return {
        links: links.filter(link => link.elem.includes('HEADER')),
        isAuth: getIsAuth(state),
        surname: getSurname(state),
        name: getName(state),
        patronymic: getPatronymic(state),
        img: getImg(state)
    }
};

export default connect(mapStateToPpops, { logout })(HeaderContainer);
