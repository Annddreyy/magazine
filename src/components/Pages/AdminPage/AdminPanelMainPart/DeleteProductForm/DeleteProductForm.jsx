import { Field } from "redux-form";
import { Input } from "../../../../common/FormControls/FormControls";
import { requiredField } from "../../../../../utils/validators/validators";
import classes from './../Form.module.css';

const DeleteProductForm = ({ handleSubmit, error }) => {
    return (
        <form action="" onSubmit={ handleSubmit } className={ classes.form }>
            <h2>Форма удаления товара</h2>
            <label htmlFor="title">Название <span className={ classes.redStar }>*</span></label>
            <Field 
                id='title'
                name='title'
                component={ Input }
                validate={[ requiredField ]}
            />
            <button className={ classes.button }>Удалить</button>
        </form>
    )
}

export default DeleteProductForm;