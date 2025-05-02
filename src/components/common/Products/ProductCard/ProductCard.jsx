import { NavLink } from 'react-router-dom';
import classes from './ProductCard.module.css';
import { unfillHeart, fillHeart, productImg, binLogo } from '../../../../config/images';
import createStars from '../../../../utils/createStars';

const ProductCard = ({ setFavority, deleteFavority, addProduct, ...product }) => {
    let statusClasses = new Map([
        ['Хит продаж!', classes.statusBlue],
        ['Скидка!', classes.statusRed],
        ['Новинка!', classes.statusPurple]
    ]);

    let stars = createStars(product.grade);

    const setFavorityStatusHandler = () => setFavority({...product, favority: true });
    const deleteFavorityStatusHandler = () => deleteFavority(product.id);

    const addProductHandler = () => addProduct({ id: product.id, title: product.title, price: product.price, count: 1 });

    return (
        <div className={ classes.card }>
            <NavLink to={ '/product/' + product.id }>
                <img src={ productImg } className={ classes.img } alt="" />
            </NavLink>
            <div className={ classes.isFavourity } onClick={ product.favority ? deleteFavorityStatusHandler : setFavorityStatusHandler }>
                <img src={ product.favority ? fillHeart : unfillHeart } alt="Добавить в избранное" />
            </div>
            <div className={ classes.information }>
                <span className={ classes.title }>{ product.title }</span>
                <span className={ classes.status + ' ' + statusClasses.get(product.status) }>{ product.status }</span>
            </div>
            <div className={ classes.information }>
                <span className={ classes.price }>{ product.price } руб.</span>
                <span>{ stars }</span>
            </div>
            <button className={ classes.button } onClick={ addProductHandler } >
                <span>Добавить в корзину</span>
                <img src={ binLogo } alt="Добавить в корзину" />
            </button>
        </div>
    )
}

export default ProductCard;