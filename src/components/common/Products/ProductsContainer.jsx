import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
import { getProducts, setFavorityStatus } from "../../../redux/productsReducer";
import { addProduct } from "../../../redux/binReducer";

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(1, 1);
    }
    render() {
        return (
            <Products {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize
    }
};

export default connect(mapStateToProps, { setFavorityStatus, addProduct, getProducts })(ProductsContainer);