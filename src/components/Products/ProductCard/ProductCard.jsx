const ProductCard = ({ id, title, price, grade, status, favority }) => {
    return (
        <div>
            <p>{ id }</p>
            <p>{ title }</p>
            <p>{ price }</p>
            <p>{ grade }</p>
            <p>{ status }</p>
            <p>{ favority }</p>
        </div>
    )
}

export default ProductCard;