import { compose } from 'redux';
import { connect } from 'react-redux';
import withPaginator from '../../../hoc/withPaginator';
import ProductsContainer from './ProductsContainer';
import { getCurrentPage, getPageSize, getTotalProductsCount } from '../../../redux/products/productsSelectors';
import { setCurrentPage } from '../../../redux/products/productsReducer';

const mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalProductsCount(state)
    }
}

export default compose(
    connect(mapStateToProps, { setCurrentPage }),
    withPaginator
)(ProductsContainer);