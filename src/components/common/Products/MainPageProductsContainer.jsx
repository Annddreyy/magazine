import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../redux/bin/binThunks';
import { deleteFavority, setFavority } from '../../../redux/favority/favorityThunks';
import { setCategory, setSortBy } from '../../../redux/products/productsReducer';
import { getIsFetching, getProductsSelector } from '../../../redux/products/productsSelectors';
import { getProducts } from '../../../redux/products/productsThunks';
import Products from './Products';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(1, 6);
    }
    
    render() {
        return (
            <div className="container">
                <h2>Каталог товаров</h2>
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
        category: state.products.category,
        sortBy: state.products.sortBy,
        products: getProductsSelector(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, { setFavority, addProduct, getProducts, deleteFavority, setCategory, setSortBy })(ProductsContainer);