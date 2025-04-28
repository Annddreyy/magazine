import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { setFavority } from "../../../redux/productsReducer";
import { addProduct } from "../../../redux/binReducer";
import { compose } from "redux";
import withLoader from "../../../hoc/withLoader";

class ProductsContainer extends React.Component {
    render() {
        return (
            <Products {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        isFetching: state.products.isFetching
    }
};

export default compose(
    connect(mapStateToProps, { setFavority, addProduct }),
    withLoader
)(ProductsContainer)