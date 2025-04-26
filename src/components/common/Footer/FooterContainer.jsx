import { connect } from "react-redux";
import Footer from "./Footer"

const FooterContainer = (props) => {
    return (
        <Footer {...props} />
    )
};

const mapStateToPropse = (state) => {
    return {
        links: state.footer.links
    }
};

export default connect(mapStateToPropse)(FooterContainer);
