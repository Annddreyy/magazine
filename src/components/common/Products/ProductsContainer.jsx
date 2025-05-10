import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import Sort from './Sort/Sort';
import { getProducts } from '../../../redux/products/productsThunks';
import { setFavority, deleteFavority } from '../../../redux/favority/favorityThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import { getIsFetching, getProductsSelector } from '../../../redux/products/productsSelectors';
import { setSortBy, setCategory } from '../../../redux/products/productsReducer';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.currentPage || 1, this.props.pageSize || 6);
    }

    componentDidUpdate(prevState) {
        let { currentPage, pageSize, category, sortBy } = this.props;
        if (prevState.currentPage !== currentPage || prevState.category !== category || prevState.sortBy !== sortBy) {
            this.updateProductsList(currentPage, pageSize, category, sortBy);
        }
    }

    updateProductsList(currentPage, pageSize, category = undefined, sortBy = undefined) {
        this.props.getProducts(currentPage, pageSize, category, sortBy);
    }
    
    render() {
        return (
            <div className="container">
                <h2>Каталог товаров</h2>
                <Sort setCategory={ this.props.setCategory } setSortBy={ this.props.setSortBy } />
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