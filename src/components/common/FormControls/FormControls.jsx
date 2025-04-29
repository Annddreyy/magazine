import React from 'react';
import classes from './FormControls.module.css';
import readFile from '../../../utils/readFile';

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
export const FileInput = ({input, meta, setSelectedImg, ...props}) => {
    const showError = meta.error && meta.touched;

    const read = async(file) => {
        let url = await readFile(file);
        setSelectedImg( url );
    }

    return (
        <div className={ classes.formControl + ' ' + (showError ? classes.error : '') }>
            <input 
                type={ props.type } 
                onChange={(event) => { read(event.target.files[0]); }}  
                className={ classes.input } 
                {...props} 
            />
        </div>
    )
}