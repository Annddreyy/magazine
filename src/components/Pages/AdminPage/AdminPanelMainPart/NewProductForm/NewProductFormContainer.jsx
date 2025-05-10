import { reduxForm } from "redux-form";
import NewProductForm from "./NewProductForm"

const NewProductFormContainer = () => {
    const onSubmit = (formData) => {
        console.log( formData );
    }
    return (
        <NewProductForm onSubmit={ onSubmit } />
    )
};

export default reduxForm({ form: 'newProduct' })(NewProductFormContainer);