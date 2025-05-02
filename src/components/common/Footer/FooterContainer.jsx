import { connect } from 'react-redux';
import Footer from './Footer';
import { links } from '../../../config/links';

const mapStateToProps = (state) => {
    return {
        links: links.filter(link => link.elem.includes('FOOTER'))
    }
};

export default connect(mapStateToProps)(Footer);
