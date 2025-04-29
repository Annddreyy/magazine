import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import ProductsContainer from '../components/common/Products/ProductsContainer';

const Catalog = () => {
    return (
        <div>
            <HeaderContainer />
            <ProductsContainer title='Каталог товаров' />
            <FooterContainer />
        </div>
    )
};

export default Catalog;
