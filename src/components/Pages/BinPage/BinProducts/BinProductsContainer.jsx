import React from 'react';
import { connect } from 'react-redux';
import BinProducts from './BinProducts';
import { decreaseProduct, deleteProduct, getBinProductsList, increaseProduct } from '../../../../redux/bin/binThunks';
import { getBinProducts } from '../../../../redux/bin/binSelectors';

class BinProductContainer extends React.Component {
    componentDidMount() {
        this.props.getBinProductsList();
    }
    render() {
        return (
        <BinProducts 
            products={ this.props.products }
            increaseProduct={ this.props.increaseProduct }
            decreaseProduct={ this.props.decreaseProduct }
            deleteProduct={ this.props.deleteProduct }
        />)
    }
};

const mapStateToProps = (state) => {
    return {
        products: getBinProducts(state)
    }
};

export default connect(mapStateToProps, { 
    increaseProduct, 
    decreaseProduct,
    deleteProduct,
    getBinProductsList
 })(BinProductContainer);
