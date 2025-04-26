import defaultImg from './../../../assets/images/product.png';
import classes from './ProductMainPart.module.css';

const ProductMainPart = ({ title, img, description, producer, compound }) => {
    debugger;
    return (
        <section className='container'>
            <h2>{ title }</h2>
            <div className={ classes.description }>
                <img src={ img || defaultImg } alt="" />
                <div className={ classes.text }>
                    <p className={ classes.title }>Описание:</p>
                    <p>{ description }</p>
                    <p className={ classes.title }>Производитель:</p>
                    <p>{ producer }</p>
                    <p className={ classes.title }>Состав:</p>
                    <p>{ compound }</p>
                </div>
            </div>
        </section>
    )
};

export default ProductMainPart;
