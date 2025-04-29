import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm"
import { registration } from "../../../redux/auth/authThunks";
import readFile from "../../../utils/readFile";

const RegistrationFormContainer = (props) => {
    const onSubmit = async(formData) => {
        let img = await readFile(formData.photo);
        let { surname, name, patronymic, login, password } = { ...formData };
        img = img.split(',')[1];
        props.registration(surname, name, patronymic, login, password, img);
    };

    return (
        <RegistrationForm {...props} onSubmit={ onSubmit }/>
    )
};



export default connect(null, { registration })(RegistrationFormContainer);