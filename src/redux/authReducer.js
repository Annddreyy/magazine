import { usersAPI } from '../api/api';
import { getSHA256Hash } from '../utils/sha256';

const AUTH_USER = 'AUTH_USER';

const initialState = {
    login: null,
    isAuth: false,
    surname: null,
    name: null,
    img: null,
    patronymic: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
    case AUTH_USER:
        return {
            ...state,
            login: action.userInformation.login,
            surname: action.userInformation.surname,
            name: action.userInformation.name,
            patronymic: action.userInformation.patronymic,
            isAuth: true
        };
    default:
        return state;
    }
};

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
        if (user.login == login && user.password == password) {
            await usersAPI.auth(login, password);
            dispatch(authUserAC(user));
            console.log( 'ok' );
        }
    }
};

export const authUserAC = (userInformation) => ({ type: AUTH_USER, userInformation });

export default authReducer;
