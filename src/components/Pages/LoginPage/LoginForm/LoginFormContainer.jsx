import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authUser } from '../../../../redux/authReducer';

const LoginFormContainer = ({ authUser }) => {
    return (
        <LoginForm authUser={ authUser } />
    )
};

export default connect(null, { authUser })(LoginFormContainer);