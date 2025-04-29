import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from './../../../../utils/validators/validators';
import { Input } from '../../../common/FormControls/FormControls';
import classes from './../../../common/FormControls/Form.module.css';
import styles from './../../../../components/common/FormControls/FormControls.module.css';

const LoginForm = ({ handleSubmit, error, isAuth }) => {
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
                        { error && <div className={ styles.formSummaryError }>
                            { error }
                        </div> }
                        <form action="" method='get' className={ classes.items } onSubmit={ handleSubmit }>
                            <label htmlFor='login'>Логин <span className={ classes.redStar }>*</span></label>
                            <Field 
                                type='text'
                                name='login'
                                id='login'
                                component={ Input }
                                validate={ [requiredField] }
                            />
                            <label htmlFor='password'>Пароль <span className={ classes.redStar }>*</span></label>
                            <Field 
                                type='password'
                                name='password'
                                id='password'
                                component={ Input }
                                validate={ [requiredField] }
                            />
                            <button className={ classes.button }>Войти</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
};

export default reduxForm({ form: 'login' })(LoginForm);