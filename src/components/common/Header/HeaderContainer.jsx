import { connect } from "react-redux";
import Header from "./Header";
import { links } from "../../../config/links";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
};

const mapStateToPpops = (state) => {
    return {
        links: links.filter(link => link.elem.includes('HEADER')),
        isAuth: state.auth.isAuth,
        surname: state.auth.surname,
        name: state.auth.name,
        patronymic: state.auth.patronymic
    }
};

export default connect(mapStateToPpops)(HeaderContainer);
