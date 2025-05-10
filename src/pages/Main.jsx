import FooterContainer from './../components/common/Footer/FooterContainer';
import HeaderContainer from './../components/common/Header/HeaderContainer';

import MainPageProductsContainer from '../components/common/Products/MainPageProductsContainer';
import AboutMini from './../components/Pages/MainPage/AboutMini/AboutMini';
import BottomPart from './../components/Pages/MainPage/BottomPart/BottomPart';
import TopPart from './../components/Pages/MainPage/TopPart/TopPart';


const Main = () => {
    return (
        <div>
            <HeaderContainer />
            <TopPart />
            <AboutMini />
            <MainPageProductsContainer />
            <BottomPart />
            <FooterContainer />
        </div>
    )
}

export default Main;
