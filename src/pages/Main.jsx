import HeaderContainer from "../components/Header/HeaderContainer";
import ProductsContainer from "../components/Products/ProductsContainer";
import TopPart from '../components/TopPart/TopPart';

const Main = (props) => {
    return (
        <div>
            <HeaderContainer />
            <TopPart />
            <ProductsContainer />
        </div>
    )
}

export default Main;
