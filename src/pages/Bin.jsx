import HeaderContainer from './../components/Header/HeaderContainer';
import FooterContainer from './../components/Footer/FooterContainer';
import BinProductsContainer from '../components/BinProducts/BinProductsContainer';

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