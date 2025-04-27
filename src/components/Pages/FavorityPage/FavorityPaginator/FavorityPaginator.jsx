import React from "react";
import Paginator from "../../../common/Paginator/Paginator"
import { connect } from "react-redux";
import { getProducts, setCurrentPage } from "../../../../redux/productsReducer";
import { getFavorityProducts } from "../../../../utils/workingWithLocalStorage";

class ProductPaginator extends React.Component {
    render() {
        return (
            <Paginator {...this.props} />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        currentPage: 1,
        pageSize: state.products.pageSize,
        totalItemsCount: getFavorityProducts().length
    }
};

const mapDispatchToProps = { getProducts, setCurrentPage }

export default connect(mapStateToProps, mapDispatchToProps)(ProductPaginator);