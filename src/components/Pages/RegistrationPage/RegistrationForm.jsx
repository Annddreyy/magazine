import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { correctPassword, minLengthCreator, requiredField } from './../../../utils/validators/validators';
import { FileInput, Input } from './../../common/FormControls/FormControls';
import classes from './../../common/FormControls/Form.module.css';
import styles from './../../../components/common/FormControls/FormControls.module.css';

const RegistrationForm = ({ handleSubmit, error }) => {
    let minLength8 = minLengthCreator(8);
    return (
        <div className={ classes.form }>
            <div className={ classes.left }>
                <h2 className={ classes.formPartTitle }>Авторизация</h2>
                <p>Есть аккаунт?</p>
                <NavLink to={'/login'} className={ classes.link }>Войти</NavLink>
            </div>
            <div>
                <h2 className={ classes.formPartTitle }>Регистрация</h2>
                { error && <div className={ styles.formSummaryError }>
                    { error }
                </div> }
                <form action="" method='get' className={ classes.items } onSubmit={ handleSubmit }>
                    <label htmlFor='surname'>Фамилия <span className={ classes.redStar }>*</span></label>
                    <Field 
                        type='text'
                        name='surname'
                        id='surname'
                        component={ Input }
                        validate={ [requiredField] }
                    />
                    <label htmlFor='name'>Имя <span className={ classes.redStar }>*</span></label>
                    <Field 
                        type='text'
                        name='name'
                        id='name'
                        component={ Input }
                        validate={ [requiredField] }
                    />
                    <label htmlFor='login'>Отчество</label>
                    <Field 
                        type='text'
                        name='patronymic'
                        id='patronymic'
                        component={ Input }
                    />
                    <label htmlFor='login'>Логин <span className={ classes.redStar }>*</span></label>
                    <Field 
                        type='text'
                        name='login'
                        id='login'
                        component={ Input }
                        validate={ [requiredField, minLength8] }
                    />
                    <label htmlFor='password'>Пароль <span className={ classes.redStar }>*</span></label>
                    <Field 
                        type='password'
                        name='password'
                        id='password'
                        component={ Input }
                        validate={ [requiredField, minLength8, correctPassword] }
                    />
                    <label htmlFor='photo'>Фото <span className={ classes.redStar }>*</span></label>
                    <div>
                        <Field 
                            type='file'
                            name='photo'
                            id='photo'
                            component={ FileInput }
                        />
                    </div>
                    <button className={ classes.button }>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
};

export default reduxForm({ form: 'registration' })(RegistrationForm);