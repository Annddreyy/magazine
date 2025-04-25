import HeaderContainer from "../components/Header/HeaderContainer";
import ProductsContainer from "../components/Products/ProductsContainer";
import TopPart from '../components/TopPart/TopPart';
import AboutMini from "../components/AboutMini/AboutMini";
import BottomPart from "../components/BottomPart/BottomPart";
import Footer from "../components/Footer/Footer";

const Main = (props) => {
    return (
        <div>
            <HeaderContainer />
            <TopPart />
            <AboutMini />
            <ProductsContainer />
            <BottomPart />
            <Footer />
        </div>
    )
}

export default Main;
