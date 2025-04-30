import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import ProductsContainerWithPaginator from '../components/common/Products/ProductsContainerWithPaginator';

const Catalog = () => {
    return (
        <div>
            <HeaderContainer />
            <ProductsContainerWithPaginator title='Каталог товаров' />
            <FooterContainer />
        </div>
    )
};

export default Catalog;
