import { compose } from 'redux';
import ProductCard from './ProductCard/ProductCard';
import withLoader from '../../../hoc/withLoader';
import classes from './Products.module.css';
import { noProducts } from '../../../config/images';
import Sort from './Sort/Sort';

const Products = ({ products, setFavority, deleteFavority, addProduct, title }) => {
    let productsCards = products.map(product => 
        <ProductCard 
            { ...product } 
            setFavority={ setFavority }
            addProduct={ addProduct }
            deleteFavority={ deleteFavority }
            key={ product.id } 
        />
    );

    return (
        <section className='container'>
            <h2>{ title }</h2>
            <Sort />
            { 
                productsCards.length > 0 
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