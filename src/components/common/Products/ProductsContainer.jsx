import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Products from './Products';
import { setFavority, getProducts } from '../../../redux/products/productsThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import withPaginator from '../../../hoc/withPaginator';
import { setCurrentPage } from '../../../redux/products/productsReducer';
import { getCurrentPage, getIsFetching, getPageSize, getProductsSelector, getTotalProductsCount } from '../../../redux/products/productsSelectors';

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
            <Products 
                products={ this.props.products }
                setFavority={ this.props.setFavority }
                addProduct={ this.props.addProduct }
                title={ this.props.title }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalProductsCount(state)
    }
};

export default compose(
    connect(mapStateToProps, { setFavority, addProduct, getProducts, setCurrentPage }),
    withPaginator
)(ProductsContainer);