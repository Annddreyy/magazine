import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ProductMainPart from './ProductMainPart'
import { withRouter } from '../../../hoc/withRouter';
import { getProduct } from '../../../redux/products/productsThunks';

class ProductMainPartContainer extends React.Component {
    componentDidMount() {
        this.props.getProduct(+this.props.params.productId);
    }
    render() {
        return (
            <ProductMainPart { ...this.props.product } />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        product: state.products.product
    }
};
const mapDispatchToProps = { getProduct };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProductMainPartContainer);
