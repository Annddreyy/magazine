import { connect } from "react-redux";
import { deleteProduct } from "../../../../../redux/products/productsThunks";
import DeleteProductForm from "./DeleteProductForm";

const DeleteProductFormContainer = ({ deleteProduct }) => {
    const onSubmit = ({ title }) => {
        deleteProduct(title);
    }
    return (
        <DeleteProductForm onSubmit={ onSubmit } />
    )
};

export default connect(null, { deleteProduct })(DeleteProductFormContainer);