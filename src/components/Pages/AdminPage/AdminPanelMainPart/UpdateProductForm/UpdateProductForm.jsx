import { Field } from "redux-form";
import { FileInput, Input, Textarea } from "../../../../common/FormControls/FormControls";
import { minValue, requiredField } from "../../../../../utils/validators/validators";
import classes from './../Form.module.css';

const UpdateProductForm = ({ handleSubmit, error }) => {
    return (
        <form action="" onSubmit={ handleSubmit } className={ classes.form }>
            <h2>Форма редактирования товара</h2>
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
                type="number"
                component={ Input }
                validate={[ requiredField, minValue ]}
            />
            <label htmlFor="status">Статус <span className={ classes.redStar }>*</span></label>
            <Field 
                id='status'
                name='status'
                component={ Input }
                validate={[ requiredField ]}
            />
            <label htmlFor="category">Категория <span className={ classes.redStar }>*</span></label>
            <Field 
                id='category'
                name='category'
                component={ Input }
                validate={[ requiredField ]}
            />
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
            <button className={ classes.button }>Сохранить</button>
        </form>
    )
}

export default UpdateProductForm;