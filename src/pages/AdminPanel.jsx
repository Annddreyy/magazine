import HeaderContainer from '../components/common/Header/HeaderContainer';
import FooterContainer from '../components/common/Footer/FooterContainer';
import AdminPanelMainPart from '../components/Pages/AdminPage/AdminPanelMainPart/AdminPanelMainPart';
import { getIsAdmin } from '../redux/auth/authSelectors';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminPanel = ({ isAdmin }) => {
    return (
        isAdmin
        ?
        <div>
            <HeaderContainer />
            <AdminPanelMainPart />
            <FooterContainer />
        </div>
        :
        <Navigate to={ '/' } />
    )
}

let mapStateToProps = (state) => {
    return {
        isAdmin: getIsAdmin(state)
    }
}

export default connect(mapStateToProps)(AdminPanel);