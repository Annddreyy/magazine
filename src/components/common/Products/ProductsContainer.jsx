import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { setFavorityStatus } from "../../../redux/productsReducer";

class ProductsContainer extends React.Component {
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

export default connect(mapStateToProps, { setFavorityStatus })(ProductsContainer);