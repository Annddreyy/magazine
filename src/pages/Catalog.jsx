import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import ProductsContainer from '../components/common/Products/ProductsContainer';
import ProductsPaginator from '../components/Pages/ProductPage/ProductsPaginator/ProductsPaginator';

const Catalog = () => {
    return (
        <div>
            <HeaderContainer />
            <ProductsContainer title='Каталог товаров' />
            <ProductsPaginator />
            <FooterContainer />
        </div>
    )
};

export default Catalog;
