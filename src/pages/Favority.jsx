import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import FavorityPaginator from '../components/Pages/FavorityPage/FavorityPaginator/FavorityPaginator';
import FavorityProductsContainer from '../components/common/Products/FavorityProductsContainer';

const Favority = () => {
    return (
        <div>
            <HeaderContainer />
            <FavorityProductsContainer title='Избранные товары' />
            <FavorityPaginator />
            <FooterContainer />
        </div>
    )
};

export default Favority;