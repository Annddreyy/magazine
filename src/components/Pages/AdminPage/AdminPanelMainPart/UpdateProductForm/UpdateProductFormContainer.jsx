import { reduxForm } from "redux-form";
import UpdateProductForm from "./UpdateProductForm"

const UpdateProductFormContainer = () => {
    const onSubmit = (formData) => {
        console.log( formData );

    }
    return (
        <UpdateProductForm onSubmit={ onSubmit } />
    )
};

export default reduxForm({ form: 'updateProduct' })(UpdateProductFormContainer);