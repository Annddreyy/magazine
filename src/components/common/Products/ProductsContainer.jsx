import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import { setFavority, getProducts } from '../../../redux/products/productsThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import { getIsFetching, getProductsSelector } from '../../../redux/products/productsSelectors';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.currentPage || 1, this.props.pageSize || 6);
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
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, { setFavority, addProduct, getProducts })(ProductsContainer);