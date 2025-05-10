import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { authUser } from '../../../../redux/auth/authThunks';
import { getIsAdmin, getIsAuth } from '../../../../redux/auth/authSelectors';
import { getLastPage } from '../../../../redux/app/appSelectors';

const LoginFormContainer = ({ isAuth, authUser, lastPage, isAdmin, ...other }) => {
    const onSubmit = (formData) => {
        debugger;
        let { login, password } = formData;
        authUser(login, password);
    };

    return (
        <>
            {
                isAdmin 
                ?
                <Navigate to={ '/admin' } />
                :
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
    debugger;
    return {
        isAuth: getIsAuth(state),
        lastPage: getLastPage(state),
        isAdmin: getIsAdmin(state)
    }
};

export default connect(mapStateToProps, { authUser })(LoginFormContainer);