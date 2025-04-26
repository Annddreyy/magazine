import ProductCard from "./ProductCard/ProductCard";
import classes from './Products.module.css';

const Products = ({ products, setFavorityStatus, addProduct }) => {
    products.forEach(product => console.log( product ));
    let productsCards = products.map(product => 
        <ProductCard 
            { ...product } 
            setFavorityStatus={ setFavorityStatus }
            addProduct={ addProduct }
            key={ product.id } 
        />
    );

    return (
        <section className='container'>
            <h2>Товары</h2>
            <div className={ classes.cards }>
                { productsCards }
            </div>
        </section>
    )
}

export default Products;