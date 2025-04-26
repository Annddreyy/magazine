import HeaderContainer from "../components/Header/HeaderContainer";
import ProductsContainer from "../components/Products/ProductsContainer";
import TopPart from '../components/TopPart/TopPart';
import AboutMini from "../components/AboutMini/AboutMini";
import BottomPart from "../components/BottomPart/BottomPart";
import FooterContainer from "../components/Footer/FooterContainer";

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
