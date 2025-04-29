import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authUser } from '../../../../redux/auth/authThunks';

const LoginFormContainer = (props) => {
    return (
        <LoginForm {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { authUser })(LoginFormContainer);