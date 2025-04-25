import HeaderContainer from "../components/Header/HeaderContainer";
import ProductsContainer from "../components/Products/ProductsContainer";
import TopPart from '../components/TopPart/TopPart';
import AboutMini from "../components/AboutMini/AboutMini";

const Main = (props) => {
    return (
        <div>
            <HeaderContainer />
            <TopPart />
            <AboutMini />
            <ProductsContainer />
        </div>
    )
}

export default Main;
