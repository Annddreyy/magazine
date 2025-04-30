import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authUser } from '../../../../redux/auth/authThunks';
import { getIsAuth } from '../../../../redux/auth/authSelectors';

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
        isAuth: getIsAuth(state)
    }
};

export default connect(mapStateToProps, { authUser })(LoginFormContainer);