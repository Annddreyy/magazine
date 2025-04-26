import defaultImg from './../../../assets/images/product.png';

const ProductMainPart = ({ title, img, description, producer, compound }) => {
    debugger;
    return (
        <section>
            <h2>{ title }</h2>
            <div>
                <img src={ img || defaultImg } alt="" />
                <div>
                    <p>Описание:</p>
                    <p>{ description }</p>
                    <p>Производитель:</p>
                    <p>{ producer }</p>
                    <p>Состав:</p>
                    <p>{ compound }</p>
                </div>
            </div>
        </section>
    )
};

export default ProductMainPart;
