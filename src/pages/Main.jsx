import HeaderContainer from "../components/Header/HeaderContainer";
import ProductsContainer from "../components/Products/ProductsContainer";
import TopPart from '../components/TopPart/TopPart';
import AboutMini from "../components/AboutMini/AboutMini";
import BottomPart from "../components/BottomPart/BottomPart";

const Main = (props) => {
    return (
        <div>
            <HeaderContainer />
            <TopPart />
            <AboutMini />
            <ProductsContainer />
            <BottomPart />
        </div>
    )
}

export default Main;
