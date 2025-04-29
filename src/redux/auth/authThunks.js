import { usersAPI } from '../../api/api';
import { getSHA256Hash } from '../../utils/sha256';
import { authUserAC } from './authReducer';
import { stopSubmit } from 'redux-form';

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
    let currentUser = users.find(user => user.login === login && user.password === password);
    if (currentUser) {
        await usersAPI.auth(login, password);
        dispatch(authUserAC(currentUser));
    } else {
        dispatch(stopSubmit('login', { _error: 'Неверный логин или пароль' } ));
    }
};

export const registration = (surname, name, patronymic, login, password, img_path) => async(dispatch) => {
    let passwordSHA256 = await getSHA256Hash(password);
    debugger;
    await usersAPI.registration(surname, name, patronymic, login, passwordSHA256, img_path);
    dispatch(authUser(login, password));
};
