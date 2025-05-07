import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import Sort from './Sort/Sort';
import { getProducts, setCategoryThunk } from '../../../redux/products/productsThunks';
import { setFavority, deleteFavority } from '../../../redux/favority/favorityThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import { getIsFetching, getProductsSelector } from '../../../redux/products/productsSelectors';
import { setCategory, setSortBy } from '../../../redux/products/productsReducer';

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
            <div className="container">
                <h2>Каталог товаров</h2>
                <Sort setCategoryThunk={ this.props.setCategoryThunk} setSortBy={ this.props.setPropsBy } />
                <Products 
                    products={ this.props.products }
                    setFavority={ this.props.setFavority }
                    addProduct={ this.props.addProduct }
                    deleteFavority={ this.props.deleteFavority }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, { setFavority, addProduct, getProducts, deleteFavority, setCategoryThunk, setSortBy })(ProductsContainer);