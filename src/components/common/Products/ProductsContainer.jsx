import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Products from './Products';
import { setCurrentPage } from '../../../redux/products/productsReducer';
import { setFavority, getProducts } from '../../../redux/products/productsThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import withPaginator from '../../../hoc/withPaginator';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevState) {
        if (prevState.currentPage !== this.props.currentPage) {
            this.props.getProducts(this.props.currentPage, this.props.pageSize);
        }
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
        isFetching: state.products.isFetching,
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize,
        totalItemsCount: state.products.totalProductsCount
    }
};

export default compose(
    connect(mapStateToProps, { setFavority, addProduct, getProducts, setCurrentPage }),
    withPaginator
)(ProductsContainer);