import { NavLink } from "react-router-dom";
import Input from "../../../common/FormElements/Input/Input";
import classes from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={ classes.form }>
            <div className={ classes.left }>
                <h2>Регистрация</h2>
                <p>Нет аккаунта</p>
                <NavLink to={'/registration'}>Зарегистрироваться</NavLink>
            </div>
            <div>
                <h2>Авторизация</h2>
                <form action="" method="get" className={ classes.items }>
                    <label htmlFor='login'>Логин <span className={ classes.redStar }>*</span></label>
                    <Input type='text' />
                    <label htmlFor='password'>Пароль <span className={ classes.redStar }>*</span></label>
                    <Input type='password' />
                    <Input type='submit' />
                </form>
            </div>
        </div>
    )
};

export default LoginForm;