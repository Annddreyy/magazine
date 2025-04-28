import classes from './BinProduct.module.css';
import productDefault from './../../../../../assets/images/Card/product.png';

const BinProduct = ({ id, img, title, price, count, increaseProduct, decreaseProduct, deleteProduct }) => {
    const totalPrice = price * count;

    const increaseProductHandler = () => {
        increaseProduct(id);
    };

    const decreaseProductHandler = () => {
        decreaseProduct(id);
    };

    const deleteProductHandler = () => {
        deleteProduct(id);
    };

    return (
        <tr>
            <td>
                <img src={ img || productDefault } className={ classes.img } alt="" />
            </td>
            <td>
                <h3 className={ classes.title }>{ title }</h3>
            </td>
            <td>
                <span>{ price } руб.</span>
            </td>
            <td>
                <span className={ classes.countBlock }>
                    <button className={ classes.button } onClick={ decreaseProductHandler }>-</button>
                    { count }
                    <button className={ classes.button } onClick={ increaseProductHandler } >+</button>
                </span>
            </td>
            <td>
                <span>{ totalPrice } руб.</span>
            </td>
            <td>
                <button className={ classes.button } onClick={ deleteProductHandler }>x</button>
            </td>
        </tr>
    )
};

export default BinProduct;