import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { getProducts, setFavorityStatus } from "../../../redux/productsReducer";
import { addProduct } from "../../../redux/binReducer";

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        return (
            <Products {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
};

export default connect(mapStateToProps, { setFavorityStatus, addProduct, getProducts })(ProductsContainer);