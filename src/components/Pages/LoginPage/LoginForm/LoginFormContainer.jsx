import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authUser } from '../../../../redux/auth/authThunks';

const LoginFormContainer = (props) => {
    const onSubmit = (formData) => {
        let { login, password } = formData;
        props.authUser(login, password);
    };

    return (
        <LoginForm {...props} onSubmit={ onSubmit } />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { authUser })(LoginFormContainer);