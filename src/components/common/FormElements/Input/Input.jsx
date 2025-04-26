import classes from './Input.module.css';

const Input = ({ type }) => {
    return (
        <input type={type} className={ classes.input } />
    )
};

export default Input;