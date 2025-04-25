import ProductCard from "./ProductCard/ProductCard";
import classes from './Products.module.css';

const Products = ({ products, setFavorityStatus }) => {
    products.forEach(product => console.log( product ));
    let productsCards = products.map(product => 
        <ProductCard { ...product } setFavorityStatus={ setFavorityStatus } key={ product.id } />
    );

    return (
        <div className={ classes.cards + ' ' + 'container' }>
            { productsCards }
        </div>
    )
}

export default Products;