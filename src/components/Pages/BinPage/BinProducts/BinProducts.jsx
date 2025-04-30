import BinProduct from './BinProduct/BinProduct';
import classes from './BinProducts.module.css';
import { noProducts } from '../../../../config/images';

const BinProducts = ({ products, increaseProduct, decreaseProduct, deleteProduct }) => {
    const productsElem = products.map(product => 
        <BinProduct 
            { ...product } 
            increaseProduct={ increaseProduct }
            decreaseProduct={ decreaseProduct }
            deleteProduct={ deleteProduct }
            key={ product.id }
        />
    );
    const totalPrice = products.reduce((sum, product) => sum + product.price * product.count, 0);
    return (
        <div className='container'>
            <h2>Корзина</h2>
            {
                productsElem.length
                ?
                <>
                    <div className={ classes.tableWrapper }>
                        <table className={ classes.table }>
                            <thead className={ classes.thead }>
                                <tr>
                                    <th>Фото</th>
                                    <th>Название</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                    <th>Итого</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className={ classes.tbody }>
                                { productsElem }
                            </tbody>
                        </table>
                    </div>
                    <h3 className={ classes.itog }>Итоговая сумма: { totalPrice } руб.</h3>
                    <button className={ classes.orderButton }>Оформить заказ</button>
                </>
                :
                <img src={ noProducts } className={ classes.img } />
            }
        </div>
    )
};

export default BinProducts;