import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { authUser } from '../../../../redux/auth/authThunks';
import { getIsAuth } from '../../../../redux/auth/authSelectors';
import { getLastPage } from '../../../../redux/app/appSelectors';

const LoginFormContainer = (props) => {
    let { isAuth, lastPage, authUser, ...other } = {...props};
    const onSubmit = (formData) => {
        let { login, password } = formData;
        authUser(login, password);
    };

    return (
        <>
            {
                isAuth
                ?
                <Navigate to={ lastPage } />
                :
                <LoginForm {...other} onSubmit={ onSubmit } />
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

export default connect(mapStateToProps, { authUser })(LoginFormContainer);