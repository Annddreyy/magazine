import classes from './BinProduct.module.css';
import { productImg } from '../../../../../config/images';

const BinProduct = ({ increaseProduct, decreaseProduct, deleteProduct, ...product }) => {
    const totalPrice = product.price * product.count;

    const increaseProductHandler = () => increaseProduct(product.id);
    const decreaseProductHandler = () => decreaseProduct(product.id);
    const deleteProductHandler = () => deleteProduct(product.id);

    return (
        <tr>
            <td>
                <img src={ product.img || productImg } className={ classes.img } alt="" />
            </td>
            <td>
                <h3 className={ classes.title }>{ product.title }</h3>
            </td>
            <td>
                <span>{ product.price } руб.</span>
            </td>
            <td>
                <span className={ classes.countBlock }>
                    <button className={ classes.button } onClick={ decreaseProductHandler }>-</button>
                    { product.count }
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