import { connect } from "react-redux";
import BinProducts from "./BinProducts";
import { decreaseProduct, deleteProduct, increaseProduct } from "../../../../redux/binReducer";

const BinProductContainer = (props) => {
    return (
        <BinProducts {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.bin.products
    }
};

export default connect(mapStateToProps, { 
    increaseProduct, 
    decreaseProduct,
    deleteProduct
 })(BinProductContainer);
