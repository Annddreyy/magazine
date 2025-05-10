import { Field, reduxForm } from "redux-form";
import { FileInput, Input, Textarea } from "../../../../common/FormControls/FormControls";
import { minValue, requiredField } from "../../../../../utils/validators/validators";
import classes from './../Form.module.css';
import { formTextareaBaseStyle } from './../AdminPanelMainPart';
import { useEffect, useState } from "react";
import { productsAPI } from "../../../../../api/api";
import { categories } from "../../../../../config/sort";

const UpdateProductForm = ({ handleSubmit, error }) => {
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        async function getProducts() {
            let response = await productsAPI.getAllProducts();
            setAllProducts(response);
        }
        getProducts();
    }, []);

    return (
        <form action="" onSubmit={ handleSubmit } className={ classes.form }>
            <h2>Форма редактирования товара</h2>
            <label htmlFor="selected">Выберите редактируемый товар <span className={ classes.redStar }>*</span></label>
            <Field 
                id='selected'
                name='selected'
                list='products'
                component={ Input }
                validate={[ requiredField ]}
            />
            <datalist id='products'>
                { allProducts.map(product => <option value={ product.title }></option>)}
            </datalist>
            <label htmlFor="title">Новое название <span className={ classes.redStar }>*</span></label>
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
                list="categories"
                component={ Input }
                validate={[ requiredField ]}
            />
            <datalist id="categories">
                { categories.map(category => <option value={category.value} key={ category.id }></option>) }
            </datalist>
            <label htmlFor="description">Описание <span className={ classes.redStar }>*</span></label>
            <Field 
                id='description'
                name='description'
                component={ Textarea }
                validate={[ requiredField ]}
                style={ formTextareaBaseStyle }
            />
            <label htmlFor="compound">Состав <span className={ classes.redStar }>*</span></label>
            <Field 
                id='compound'
                name='compound'
                component={ Textarea }
                validate={[ requiredField ]}
                style={ formTextareaBaseStyle }
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

export default reduxForm({ form: 'updateProduct' })(UpdateProductForm);