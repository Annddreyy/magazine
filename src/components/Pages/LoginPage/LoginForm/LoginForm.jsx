import { NavLink } from "react-router-dom";
import Input from "../../../common/FormElements/Input/Input";
import classes from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={ classes.form }>
            <div className={ classes.left }>
                <h2 className={ classes.formPartTitle }>Регистрация</h2>
                <p>Нет аккаунта?</p>
                <NavLink to={'/registration'} className={ classes.link }>Зарегистрироваться</NavLink>
            </div>
            <div>
                <h2 className={ classes.formPartTitle }>Авторизация</h2>
                <form action="" method="get" className={ classes.items }>
                    <label htmlFor='login'>Логин <span className={ classes.redStar }>*</span></label>
                    <Input type='text' />
                    <label htmlFor='password'>Пароль <span className={ classes.redStar }>*</span></label>
                    <Input type='password' />
                    <button className={ classes.button }>Войти</button>
                </form>
            </div>
        </div>
    )
};

export default LoginForm;