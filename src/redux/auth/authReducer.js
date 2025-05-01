const AUTH_USER = 'magazine/auth/AUTH_USER';
const LOGOUT_USER = 'magazine/auth/LOGOUT_USER';

const initialState = {
    isAuth: false,
    id: 0,
    login: null,
    surname: null,
    name: null,
    patronymic: null,
    img: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
    case AUTH_USER:
        return {
            ...state,
            isAuth: true,
            id: action.userInformation.id,
            login: action.userInformation.login,
            surname: action.userInformation.surname,
            name: action.userInformation.name,
            patronymic: action.userInformation.patronymic,
            img: action.userInformation['img_path']
        };
    case LOGOUT_USER:
        return {
            ...state,
            isAuth: false,
            id: 0,
            login: null,
            surname: null,
            name: null,
            patronymic: null,
            img: null
        };
    default:
        return state;
    }
};

export const authUserAC = (userInformation) => ({ type: AUTH_USER, userInformation });
export const logoutUser = () => ({ type: LOGOUT_USER });

export default authReducer;
