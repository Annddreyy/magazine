import React from 'react';
import Paginator from '../../../common/Paginator/Paginator'
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../../redux/productsReducer';

class ProductPaginator extends React.Component {
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

const mapDispatchToProps = { setCurrentPage }

export default connect(mapStateToProps, mapDispatchToProps)(ProductPaginator);