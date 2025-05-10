import { Field, reduxForm } from "redux-form";
import { FileInput, Input, Textarea } from "../../../../common/FormControls/FormControls";
import { minValue, requiredField } from "../../../../../utils/validators/validators";
import classes from './../Form.module.css';
import { categories } from "../../../../../config/sort";

const NewProductForm = ({ handleSubmit, error }) => {
    return (
        <form action="" onSubmit={ handleSubmit } className={ classes.form }>
            <h2>Форма добавления товара</h2>
            <label htmlFor="title">Название <span className={ classes.redStar }>*</span></label>
            <Field 
                id='title'
                name='title'
                component={ Input }
                validate={[ requiredField ]}
            />
            <label htmlFor="price">Цена <span className={ classes.redStar }>*</span></label>
            <Field 
                id='price'
                name='price'
                component={ Input }
                validate={[ requiredField, minValue ]}
            />
            <label htmlFor="status">Статус</label>
            <Field 
                id='status'
                name='status'
                component={ Input }
            />
            <label htmlFor="category">Категория <span className={ classes.redStar }>*</span></label>
            <Field 
                id='category'
                name='category'
                list='categories'
                component={ Input }
                validate={[ requiredField ]}
            />
            <datalist id="categories">
                { categories.map(category => <option value={category.value}></option>) }
            </datalist>
            <label htmlFor="description">Описание <span className={ classes.redStar }>*</span></label>
            <Field 
                id='description'
                name='description'
                component={ Textarea }
                validate={[ requiredField ]}
            />
            <label htmlFor="compound">Состав <span className={ classes.redStar }>*</span></label>
            <Field 
                id='compound'
                name='compound'
                component={ Textarea }
                validate={[ requiredField ]}
            />
            <label htmlFor="photo">Фотография </label>
            <Field 
                id='photo'
                name='photo'
                type="file"
                component={ FileInput }
            />
            <button className={ classes.button }>Добавить</button>
        </form>
    )
}

export default reduxForm({ form: 'newProduct' })(NewProductForm);