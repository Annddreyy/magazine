import { NavLink } from 'react-router-dom';
import Star from './../../Star/Star';
import classes from './ProductCard.module.css';
import { unfillHeart, fillHeart, productImg, binLogo } from '../../../../config/images';

const ProductCard = ({ 
    id, title, price, grade, status, favority, imgSrc, 
    setFavority, addProduct
}) => {
    let statusClasses = new Map([
        ['Хит продаж!', classes.statusBlue],
        ['Скидка!', classes.statusRed],
        ['Новинка!', classes.statusPurple]
    ]);

    let stars = [];
    for (let i = 0; i < 5; i++) {
        let isFill = i < grade;
        stars.push( <Star isFill={ isFill }/> );
    }

    const setFavorityStatusHandler = () => {
        setFavority(id);
    };

    const addProductHandler = () => {
        addProduct({ id, title, price, count: 1 });
    };

    return (
        <div className={ classes.card }>
            <NavLink to={ '/product/' + id }>
                <img src={ productImg } className={ classes.img } alt="" />
            </NavLink>
            <div className={ classes.isFavourity } onClick={ setFavorityStatusHandler }>
                <img src={ favority ? fillHeart : unfillHeart } alt="Добавить в избранное" />
            </div>
            <div className={ classes.information }>
                <span className={ classes.title }>{ title }</span>
                <span className={ classes.status + ' ' + statusClasses.get(status) }>{ status }</span>
            </div>
            <div className={ classes.information }>
                <span className={ classes.price }>{ price } руб.</span>
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