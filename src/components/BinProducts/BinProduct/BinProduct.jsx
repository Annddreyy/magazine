const BinProduct = ({ img, title, price, count}) => {
    const totalPrice = price * count;
    return (
        <tr>
            <td>
                <img src={ img } alt="" />
            </td>
            <td>
                <h3>{ title }</h3>
            </td>
            <td>
                <span>{ price } руб.</span>
            </td>
            <td>
                <span>{ count }</span>
            </td>
            <td>
                <span>{ totalPrice } руб.</span>
            </td>
            <td>
                <button>x</button>
            </td>
        </tr>
    )
};

export default BinProduct;