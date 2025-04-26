import BinProduct from './BinProduct/BinProduct';

const BinProducts = ({ products }) => {
    const productsElem = products.map(product => <BinProduct { ...product } key={ product.id }/>);
    return (
        <table>
            <thead>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Итого</th>
                <th></th>
            </thead>
            <tbody>
                { productsElem }
            </tbody>
        </table>
    )
};

export default BinProducts;