import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';

import Addresses from "./../components/Pages/ContactsPage/Addresses/Addresses";
import ContactWithUs from "./../components/Pages/ContactsPage/ContactWithUs/ContactWithUs";
import WorkingHours from "./../components/Pages/ContactsPage/WorkingHours/WorkingHours";

const Contacts = () => {
    return (
        <div>
            <HeaderContainer />
            <ContactsMain />
            <FooterContainer />
        </div>
    )
};

const ContactsMain = () => {
    return (
        <main>
            <Addresses />
            <WorkingHours />
            <ContactWithUs />
        </main>
    )
};

export default Contacts;