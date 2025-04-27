import classes from './Input.module.css';

const Input = ({ type, ref }) => {
    return (
        <input type={type} className={ classes.input } ref={ ref } />
    )
};

export default Input;