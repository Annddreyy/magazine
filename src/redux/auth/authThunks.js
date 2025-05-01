import { usersAPI } from '../../api/api';
import getCookie from '../../utils/getCookie';
import { getSHA256Hash } from '../../utils/sha256';
import { authUserAC } from './authReducer';
import { stopSubmit } from 'redux-form';

export const checkUser = () => async(dispatch) => {
    let userId = +getCookie('userId');
    if (userId) {
        let user = await usersAPI.getUser(+userId);
        dispatch(authUserAC(user));
    }
};

export const authUser = (login, password) => async(dispatch) => {
    password = await getSHA256Hash(password);
    let response = await usersAPI.auth(login, password);
    if (response.status === 'ok') {
        document.cookie = `userId=${response.user.id};`;

        dispatch(authUserAC(response.user));
    }
    else {
        dispatch(stopSubmit('login', { _error: 'Неверный логин или пароль' } ));
    }
};

export const registration = (surname, name, patronymic, login, password, img_path) => async(dispatch) => {
    let passwordSHA256 = await getSHA256Hash(password);
    await usersAPI.registration(surname, name, patronymic, login, passwordSHA256, img_path);
    dispatch(authUser(login, password));
};
