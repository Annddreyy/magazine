import Addresses from "../components/Addresses/Addresses";
import ContactWithUs from "../components/ContactWithUs/ContactWithUs";
import Footer from "../components/Footer/Footer";
import HeaderContainer from "../components/Header/HeaderContainer";
import WorkingHours from "../components/WorkingHours/WorkingHours";

const Contacts = () => {
    return (
        <div>
            <HeaderContainer />
            <ContactsMain />
            <Footer />
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