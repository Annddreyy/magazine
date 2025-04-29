import { usersAPI } from '../../api/api';
import { getSHA256Hash } from '../../utils/sha256';
import { authUserAC } from './authReducer';

export const checkUser = () => (dispatch) => {
    if (document.cookie.includes('user')) {
        const user = {
            'login': '1234',
            'surname': 'iva',
            'name': 'petr',
            'patronymic': '4'
        };
        dispatch(authUserAC(user));
    }
};

export const authUser = (login, password) => async(dispatch) => {
    const users = await usersAPI.getUsers();
    password = await getSHA256Hash(password);
    for (let user of users) {
        if (user.login === login && user.password === password) {
            await usersAPI.auth(login, password);
            dispatch(authUserAC(user));
            console.log( 'ok' );
        }
    }
};
