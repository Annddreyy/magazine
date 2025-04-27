import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { setFavority } from "../../../redux/productsReducer";
import { addProduct } from "../../../redux/binReducer";

class FavorityProductsContainer extends React.Component {
    render() {
        return (
            <Products {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.favorityProducts,
        isFetching: state.products.isFetching
    }
};

export default connect(mapStateToProps, { setFavority, addProduct })(FavorityProductsContainer);