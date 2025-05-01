import classes from './TopPart.module.css';

const TopPart = () => {
    return (
        <section className={ classes.topPart }>
            <div className="container">
                <div className={ classes.item}>
                    <p className={ classes.text }>
                        Косметический бренд, который поможет Вашей коже лица
                        в борьбе с пигментацией, шелушением, первыми признаками старения, высыпаниями, 
                        угревой сыпью, а также быстро восстановить кожу после косметологических процедур.
                        Парфюмированная линейка для тела мягко отшелушивает, увлажняет и питает кожу, 
                        оставляя приятный аром на долгое время и легкое сияние.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TopPart;