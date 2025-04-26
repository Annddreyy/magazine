import { compose } from "redux";
import ProductMainPart from "./ProductMainPart"
import { withRouter } from "../../../hoc/withRouter";
import { connect } from "react-redux";

const ProductMainPartContainer = ({ products, params }) => {
    const product = products.find(product => product.id === +params.productId);
    return (
        <ProductMainPart {...product } />
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
};

export default compose(
    connect(mapStateToProps),
    withRouter
)(ProductMainPartContainer);