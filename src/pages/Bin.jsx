import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';
import BinProductsContainer from './../components/Pages/BinPage/BinProducts/BinProductsContainer';

const Bin = () => { 
    return (
        <div>
            <HeaderContainer />
            <BinProductsContainer />
            <FooterContainer />
        </div>
    )
};

export default Bin;