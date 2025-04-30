import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import FavorityProductsContainer from '../components/common/Products/FavorityProductsContainer';

const Favority = () => {
    return (
        <div>
            <HeaderContainer />
            <FavorityProductsContainer title='Избранные товары' />
            <FooterContainer />
        </div>
    )
};

export default Favority;