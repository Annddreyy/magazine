import React from "react";
import Paginator from "../../../common/Paginator/Paginator"
import { connect } from "react-redux";
import { getProducts } from "../../../../redux/productsReducer";

class ProductPaginator extends React.Component {
    componentDidMount() {
        debugger;
        this.props.getProducts(this.props.currentPage, this.props.pageSize)
    }
    render() {
        return (
            <Paginator {...this.props} />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize,
        totalItemsCount: state.products.totalProductsCount
    }
};

const mapDispatchToProps = { getProducts }

export default connect(mapStateToProps, mapDispatchToProps)(ProductPaginator);