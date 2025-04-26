import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
    debugger;
    return (
        <Header {...props} />
    )
};

const mapStateToPpops = (state) => {
    debugger;
    return {
        links: state.header.links
    }
};


export default connect(mapStateToPpops)(HeaderContainer);
