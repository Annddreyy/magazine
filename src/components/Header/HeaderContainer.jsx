import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
};

const mapStateToPpops = (state) => {
    return {
        links: state.header.links
    }
};


export default connect(mapStateToPpops)(HeaderContainer);
