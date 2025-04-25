import ProductCard from "./ProductCard/ProductCard";
import classes from './Products.module.css';

const Products = ({ products }) => {
    let productsCards = products.map(product => 
        <ProductCard {...product} key={ product.id } />
    );

    return (
        <div className={ classes.cards + ' ' + 'container' }>
            { productsCards }
        </div>
    )
}

export default Products;