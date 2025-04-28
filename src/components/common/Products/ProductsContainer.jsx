import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import { getProducts, setFavority } from '../../../redux/productsReducer';
import { addProduct } from '../../../redux/binReducer';

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
        pageSize: state.products.pageSize
    }
};

export default connect(mapStateToProps, { setFavority, addProduct, getProducts })(ProductsContainer)