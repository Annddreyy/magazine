import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
};

const mapStateToPpops = (state) => {
    return {
        links: state.header.links,
        isAuth: state.auth.isAuth,
        surname: state.auth.surname,
        name: state.auth.name,
        patronymic: state.auth.patronymic
    }
};

export default connect(mapStateToPpops)(HeaderContainer);
