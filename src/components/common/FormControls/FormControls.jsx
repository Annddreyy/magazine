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
            <input type={ props.type } className={ classes.input } {...input} {...props} />
        </div>
    )
}

export const FileInput = ({input, meta, ...props}) => {
    const showError = meta.error && meta.touched;

    return (
        <div className={ classes.formControl + ' ' + (showError ? classes.error : '') }>
            <input 
                type={ props.type } 
                onChange={(event) => {
                    input.onChange(event.target.files[0]);
                }}
                className={ classes.input } 
                {...props} 
            />
        </div>     
    )
}