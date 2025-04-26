import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import ProductMainPartContainer from '../components/Pages/ProductPage/ProductMainPartContainer';

const Product = () => {
    return (
        <div>
            <HeaderContainer />
            <ProductMainPartContainer />
            <FooterContainer />
        </div>
    )
};

export default Product;