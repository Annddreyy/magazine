import React from 'react';
import { connect } from 'react-redux';
import BinProducts from './BinProducts';
import { decreaseProduct, deleteProduct, getBinProductsList, increaseProduct } from '../../../../redux/bin/binThunks';

class BinProductContainer extends React.Component {
    componentDidMount() {
        this.props.getBinProductsList();
    }
    render() {
        return <BinProducts {...this.props} />
    }
};

const mapStateToProps = (state) => {
    return {
        products: state.bin.products
    }
};

export default connect(mapStateToProps, { 
    increaseProduct, 
    decreaseProduct,
    deleteProduct,
    getBinProductsList
 })(BinProductContainer);
