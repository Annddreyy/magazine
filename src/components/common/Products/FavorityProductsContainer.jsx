import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import { deleteFavority, getFavorityThunk, setFavority } from '../../../redux/products/productsThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import { getFavority, getIsFetching } from '../../../redux/products/productsSelectors';

class FavorityProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getFavorityThunk();
    }
    render() {
        return (
            <Products {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: getFavority(state),
        isFetching: getIsFetching(state)
    }
};

export default connect(mapStateToProps, { setFavority, addProduct, getFavorityThunk, deleteFavority })(FavorityProductsContainer);