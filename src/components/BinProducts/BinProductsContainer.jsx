import { connect } from "react-redux";
import BinProducts from "./BinProducts";

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

export default connect(mapStateToProps)(BinProductContainer);
