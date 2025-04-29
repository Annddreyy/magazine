import authReducer, { authUserAC } from '../../../redux/auth/authReducer';

const state = {
    isAuth: false,
    id: 0,
    login: null,
    surname: null,
    name: null,
    patronymic: null,
    img: null
};

describe('check auth user', () => {
    const action = authUserAC({ 
        id: 10, 
        login: 'test_login', 
        surname: 'test_surname', 
        name: 'test_name',
        patronymic: 'test_patronymic',
        'img_path': 'test_img'
    }); 
    const newState = authReducer(state, action);

    it('check user id', () => expect(newState.id).toBe(10));
    it('check user login', () => expect(newState.login).toBe('test_login'));
    it('check user surname', () => expect(newState.surname).toBe('test_surname'));
    it('check user name', () => expect(newState.name).toBe('test_name'));
    it('check user patronymic', () => expect(newState.patronymic).toBe('test_patronymic'));
    it('check user img', () => expect(newState.img).toBe('test_img'));
});
