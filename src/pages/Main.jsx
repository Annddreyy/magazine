import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';

import ProductsContainer from './../components/common/Products/ProductsContainer';
import TopPart from './../components/Pages/MainPage/TopPart/TopPart';
import AboutMini from "./../components/Pages/MainPage/AboutMini/AboutMini";
import BottomPart from "./../components/Pages/MainPage/BottomPart/BottomPart";


const Main = (props) => {
    return (
        <div>
            <HeaderContainer />
            <TopPart />
            <AboutMini />
            <ProductsContainer />
            <BottomPart />
            <FooterContainer />
        </div>
    )
}

export default Main;
