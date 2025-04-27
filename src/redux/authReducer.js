import { usersAPI } from '../api/api';
import { getSHA256Hash } from '../utils/sha256';

const AUTH_USER = 'AUTH_USER';

const initialState = {
    login: null,
    isAuth: true,
    surname: null,
    name: null,
    patronymic: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
    default:
        return state;
    }
};

export const authUser = (login, password) => async(dispatch) => {
    const users = await usersAPI.getUsers();
    password = await getSHA256Hash(password);
    for (let user of users) {
        console.log( user.login, login, user.password, password );
        if (user.login == login && user.password == password) {
            console.log( 'ok' );
            dispatch(authUserAC(user));
        }
    }
};

export const authUserAC = (userInformation) => ({ type: AUTH_USER, userInformation });

export default authReducer;
