import { Field, reduxForm } from "redux-form";
import { Input } from "../../../../common/FormControls/FormControls";
import { requiredField } from "../../../../../utils/validators/validators";
import classes from './../Form.module.css';
import { useEffect, useState } from "react";
import { productsAPI } from "../../../../../api/api";

const DeleteProductForm = ({ handleSubmit, error }) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            let response = await productsAPI.getAllProducts();
            console.log( response );
            setAllProducts(response);
        }
        getProducts();
    }, []);

    return (
        <form action="" onSubmit={ handleSubmit } className={ classes.form }>
            <h2>Форма удаления товара</h2>
            <label htmlFor="title">Название <span className={ classes.redStar }>*</span></label>
            <Field 
                id='title'
                name='title'
                list="products"
                component={ Input }
                validate={[ requiredField ]}
            />
            <datalist name="products" id="products">
                {
                    console.log( allProducts, 1 )}
                    {allProducts.map(product => (
                        <option key={product.id} value={product.title} />
                    ))
                }
            </datalist>
            <button className={ classes.button }>Удалить</button>
        </form>
    )
}

export default reduxForm({ form: 'deleteProduct' })(DeleteProductForm);