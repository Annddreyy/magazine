import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import Input from "../../../common/FormElements/Input/Input";
import classes from './LoginForm.module.css';

const LoginForm = ({ authUser, isAuth }) => {
    const loginElem = React.createRef();
    const passwordElem = React.createRef();

    const checkAuth = (event) => {
        event.preventDefault();

        const login = loginElem.current.value;
        const password = passwordElem.current.value;
        
        authUser(login, password);
    };

    return (
        <>
            { isAuth
                ?
                <Navigate to='/' />
                :
                <div className={ classes.form }>
                    <div className={ classes.left }>
                        <h2 className={ classes.formPartTitle }>Регистрация</h2>
                        <p>Нет аккаунта?</p>
                        <NavLink to={'/registration'} className={ classes.link }>Зарегистрироваться</NavLink>
                    </div>
                    <div>
                        <h2 className={ classes.formPartTitle }>Авторизация</h2>
                        <form action="" method="get" className={ classes.items } onSubmit={ checkAuth }>
                            <label htmlFor='login'>Логин <span className={ classes.redStar }>*</span></label>
                            <Input type='text' ref={ loginElem } />
                            <label htmlFor='password'>Пароль <span className={ classes.redStar }>*</span></label>
                            <Input type='password' ref={ passwordElem } />
                            <button className={ classes.button }>Войти</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
};

export default LoginForm;