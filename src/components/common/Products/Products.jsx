import ProductCard from "./ProductCard/ProductCard";
import classes from './Products.module.css';

const Products = ({ products, setFavority, addProduct }) => {
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
            <h2>Товары</h2>
            <div className={ classes.cards }>
                { productsCards }
            </div>
        </section>
    )
}

export default Products;