import React from 'react';
import classes from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.error && meta.touched;
    return (
        <div className={ classes.formControl + " " + (showError ? classes.error : '') }>
            <textarea {...input} {...props}></textarea>
            { showError && <span>Ошибка</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const showError = meta.error && meta.touched;
    return (
        <div className={ classes.formControl + ' ' + (showError ? classes.error : '') }>
            <input type="text"  className={ classes.input } {...input} {...props} />
        </div>
    )
}