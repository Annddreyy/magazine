import { reduxForm } from "redux-form";
import DeleteProductForm from "./DeleteProductForm"

const DeleteProductFormContainer = () => {
    const onSubmit = (formData) => {
        console.log( formData );

    }
    return (
        <DeleteProductForm onSubmit={ onSubmit } />
    )
};

export default reduxForm({ form: 'deleteProduct' })(DeleteProductFormContainer);