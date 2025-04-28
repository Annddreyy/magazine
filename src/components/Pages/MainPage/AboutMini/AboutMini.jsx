import classes from './AboutMini.module.css';
import aboutMiniImg from './../../../../assets/images/MainPage/diploma.webp';

const AboutMini = () => {
    return (
        <section className={ classes.aboutMini }>
            <div className="container">
                <div className={ classes.items }>
                    <img src={ aboutMiniImg } alt="" />
                    <p>
                        Эmilia professional cosmetics — это капсульный бренд профессиональной 
                        косметики, созданный косметологом. Эффективный уход за кожей, доступный 
                        для каждого, как в домашних условиях, так и в профессиональной среде. 
                        Бренд объединяет в себе научный подход, инновации и эстетику, чтобы 
                        подарить коже здоровье, сияние и молодость.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default AboutMini;
