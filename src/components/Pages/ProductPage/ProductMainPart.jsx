import classes from './ProductMainPart.module.css';
import defaultImg from './../../../assets/images/Card/product.png';

const ProductMainPart = ({ title, description, producer, img, compound }) => {
    return (
        <section className='container'>
            <h2>{ title }</h2>
            <div className={ classes.description }>
                <img src={ img || defaultImg } className={ classes.img } alt="" />
                <div className={ classes.text }>
                    <p className={ classes.title }>Описание:</p>
                    <p>{ description || 'Описание отсутствует' }</p>
                    <p className={ classes.title }>Производитель:</p>
                    <p>{ producer || 'Производитель отсутствует' }</p>
                    <p className={ classes.title }>Состав:</p>
                    <p>{ compound || 'Состав отсутствует' }</p>
                </div>
            </div>
        </section>
    )
};

export default ProductMainPart;
