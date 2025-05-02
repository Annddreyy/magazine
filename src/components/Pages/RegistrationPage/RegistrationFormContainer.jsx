import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import { Navigate } from "react-router-dom";
import { registration } from "../../../redux/auth/authThunks";
import { getIsAuth } from './../../../redux/auth/authSelectors';
import { getLastPage } from './../../../redux/app/appSelectors';
import readFile from "../../../utils/readFile";

const RegistrationFormContainer = (props) => {
    let { isAuth, lastPage, registration, ...other } = {...props};

    const onSubmit = async(formData) => {
        let { surname, name, patronymic, login, password } = { ...formData };
        let img;
        if (formData.photo) {
            img = await readFile(formData.photo);
            img = img.split(',')[1];
        }
        registration(surname, name, patronymic, login, password, img);
    };

    return (
        <>
            {
                isAuth
                ?
                <Navigate to={ lastPage } />
                :
                <RegistrationForm {...other} onSubmit={ onSubmit }/>
            }
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        lastPage: getLastPage(state)
    }
};

export default connect(mapStateToProps, { registration })(RegistrationFormContainer);