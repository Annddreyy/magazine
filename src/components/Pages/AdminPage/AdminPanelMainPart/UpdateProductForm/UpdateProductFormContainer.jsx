import UpdateProductForm from "./UpdateProductForm"
import { connect } from "react-redux";
import { updateProduct } from "../../../../../redux/products/productsThunks";
import readFile from "../../../../../utils/readFile";

const UpdateProductFormContainer = ({ updateProduct }) => {
    const onSubmit = async({selected, title, photo, price, status, description, compound, category}) => {
        let img_path;
        if (photo) {
            img_path = await readFile(photo);
            img_path = img_path.split(',')[1];
        }
        console.log( 1 );
        debugger;
        updateProduct({ selected, title, img_path, price, status, description, compound, category });
        console.log( 3 );
    }
    return (
        <UpdateProductForm onSubmit={ onSubmit } />
    )
};

export default connect(null, { updateProduct })(UpdateProductFormContainer);