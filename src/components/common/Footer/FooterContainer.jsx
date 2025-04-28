import { connect } from 'react-redux';
import Footer from './Footer';
import { links } from '../../../config/links';

const FooterContainer = (props) => {
    return (
        <Footer {...props} />
    )
};

const mapStateToPropse = (state) => {
    return {
        links: links.filter(link => link.elem.includes('FOOTER'))
    }
};

export default connect(mapStateToPropse)(FooterContainer);
