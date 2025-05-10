import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Products from './Products';
import Sort from './Sort/Sort';
import withPaginator from './../../../hoc/withPaginator';
import { deleteFavority, getFavorityThunk, setFavority } from '../../../redux/favority/favorityThunks';
import { addProduct } from '../../../redux/bin/binThunks';
import { getCurrentPage, getFavority, getIsFetching, getPageSize, getTotalFavorityCount } from '../../../redux/favority/favoritySelectors';
import { setCategory, setCurrentPage, setSortBy } from '../../../redux/favority/favorityReducer';

class FavorityProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getFavorityThunk(this.props.currentPage, this.props.pageSize, this.props.category, this.props.sortBy);
    }

    componentDidUpdate(prevState) {
        let { currentPage, pageSize, category, sortBy } = this.props;
        if (prevState.currentPage !== currentPage || prevState.category !== category || prevState.sortBy !== sortBy) {
            this.props.getFavorityThunk(currentPage, pageSize, category, sortBy);
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Избранные товары</h2>
                <Sort setCategory={ setCategory } setSortBy={ setSortBy }/>
                <Products {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalItemsCount: getTotalFavorityCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        products: getFavority(state),
        isFetching: getIsFetching(state),
        category: state.favority.category,
        sortBy: state.favority.sortBy
    }
};

export default compose(
    connect(mapStateToProps, { setFavority, addProduct, getFavorityThunk, deleteFavority, setCurrentPage, setCategory, setSortBy }),
    withPaginator
)(FavorityProductsContainer); 