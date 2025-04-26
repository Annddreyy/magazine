import classes from './ProductCard.module.css';
import unfillHeart from './../../../../assets/images/heart-icon-unfill.png';
import fillHeart from './../../../../assets/images/heart-icon-fill.png';
import productImg from './../../../../assets/images/product.png';
import binLogo from './../../../../assets/images/bin-logo.png';
import Star from '../../Star/Star';

const ProductCard = ({ id, title, price, grade, status, favority, imgSrc, setFavorityStatus }) => {
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

    const handleClick = () => {
        setFavorityStatus(id);
    }

    return (
        <div className={ classes.card }>
            <img src={ imgSrc ? imgSrc : productImg } alt="" />
            <div className={ classes.isFavourity } onClick={ handleClick }>
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
            <button className={ classes.button }>
                <span>Добавить в корзину</span>
                <img src={ binLogo } alt="Добавить в корзину" />
            </button>
        </div>
    )
}

export default ProductCard;