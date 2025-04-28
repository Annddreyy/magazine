import { compose } from 'redux';
import ProductCard from './ProductCard/ProductCard';
import withLoader from '../../../hoc/withLoader';
import classes from './Products.module.css';
import noProducts from './../../../assets/images/no-products.png';

const Products = ({ products, setFavority, addProduct, title }) => {
    let productsCards = products.map(product => 
        <ProductCard 
            { ...product } 
            setFavority={ setFavority }
            addProduct={ addProduct }
            key={ product.id } 
        />
    );

    return (
        <section className='container'>
            <h2>{ title }</h2>
            { productsCards.length > 0 
                ?
                <div className={ classes.cards }>
                    { productsCards }
                </div>
                :
                <img src={ noProducts } alt="" className={ classes.img } />
            }
        </section>
    )
}

export default compose(withLoader)(Products);