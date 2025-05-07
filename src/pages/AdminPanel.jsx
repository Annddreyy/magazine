import HeaderContainer from '../components/common/Header/HeaderContainer';
import FooterContainer from '../components/common/Footer/FooterContainer';
import AdminPanelMainPart from '../components/Pages/AdminPage/AdminPanelMainPart/AdminPanelMainPart';

const AmdinPanel = () => {
    return (
        <div>
            <HeaderContainer />
            <AdminPanelMainPart />
            <FooterContainer />
        </div>
    )
}

export default AmdinPanel;