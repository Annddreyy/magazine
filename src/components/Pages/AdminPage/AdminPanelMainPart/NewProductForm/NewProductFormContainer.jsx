import { connect } from "react-redux";
import { addProduct } from "../../../../../redux/products/productsThunks";
import NewProductForm from "./NewProductForm";
import readFile from './../../../../../utils/readFile';

const NewProductFormContainer = ({ addProduct }) => {
    const onSubmit = async({ title, price, status = '', category, description, compound, photo}) => {
        let img_path;
        if (photo) {
            img_path = await readFile (photo);
            img_path = img_path.split(',')[1];
        }
        debugger;
        addProduct({title, price, status, category, description, compound, img_path});
    }
    return (
        <NewProductForm onSubmit={ onSubmit } />
    )
};

export default connect(null, { addProduct })(NewProductFormContainer);