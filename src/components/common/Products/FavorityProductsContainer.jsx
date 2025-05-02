import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Products from './Products';
import withPaginator from './../../../hoc/withPaginator';
import { deleteFavority, getFavorityThunk, setFavority } from '../../../redux/favority/favorityThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import { getCurrentPage, getFavority, getIsFetching, getPageSize, getTotalFavorityCount } from '../../../redux/favority/favoritySelectors';
import { setCurrentPage } from '../../../redux/favority/favorityReducer';

class FavorityProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getFavorityThunk(this.props.currentPage, this.props.pageSize);
    }

    componentDidUpdate(prevState) {
        if (prevState.currentPage !== this.props.currentPage) {
            this.props.getFavorityThunk(this.props.currentPage, this.props.pageSize);
        }
    }

    render() {
        return <Products {...this.props} />
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        totalItemsCount: getTotalFavorityCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        products: getFavority(state),
        isFetching: getIsFetching(state)
    }
};

export default compose(
    connect(mapStateToProps, { setFavority, addProduct, getFavorityThunk, deleteFavority, setCurrentPage }),
    withPaginator
)(FavorityProductsContainer);