import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ProductMainPart from './ProductMainPart'
import { withRouter } from '../../../hoc/withRouter';
import { getProduct } from '../../../redux/products/productsThunks';
import { getProductSelector } from '../../../redux/products/productsSelectors';

class ProductMainPartContainer extends React.Component {
    componentDidMount() {
        this.props.getProduct(+this.props.params.productId);
    }
    render() {
        return <ProductMainPart { ...this.props.product } />
    }
};

const mapStateToProps = (state) => {
    return {
        product: getProductSelector(state)
    }
};
export default compose(
    connect(mapStateToProps, { getProduct }),
    withRouter
)(ProductMainPartContainer);
