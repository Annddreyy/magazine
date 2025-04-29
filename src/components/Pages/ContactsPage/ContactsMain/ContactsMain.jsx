import Addresses from './../../../../components/Pages/ContactsPage/Addresses/Addresses';
import ContactWithUs from './../../../../components/Pages/ContactsPage/ContactWithUs/ContactWithUs';
import WorkingHours from './../../../../components/Pages/ContactsPage/WorkingHours/WorkingHours';
import classes from './ContactsMain.module.css';
import { contactsImg } from '../../../../config/images';

const ContactsMain = () => {
    return (
        <section className='container'>
            <h2>Контакты</h2>
            <div className={ classes.items }>
                <div className={ classes.text }>
                    <Addresses />
                    <WorkingHours />
                    <ContactWithUs />
                </div>
                <img src={ contactsImg } className={ classes.img } alt="" />
            </div>
        </section>
    )
};

export default ContactsMain;