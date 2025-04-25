import ProductCard from "./ProductCard/ProductCard";

const Products = ({ products }) => {
    let productsCards = products.map(product => 
        <ProductCard {...product} key={ product.id } />
    );

    return (
        <div>
            { productsCards }
        </div>
    )
}

export default Products;