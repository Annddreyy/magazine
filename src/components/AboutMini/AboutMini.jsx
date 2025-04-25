import aboutMiniImg from './../../assets/images/diploma.webp';
import classes from './AboutMini.module.css';

const AboutMini = () => {
    return (
        <section className={ classes.aboutMini }>
            <div className="container">
                <div className={ classes.items }>
                    <img src={ aboutMiniImg } alt="" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium cumque 
                        exercitationem atque quis sapiente, nobis eligendi doloremque facilis. Architecto 
                        iure quas eius et accusantium maxime aut velit pariatur at. Placeat corrupti unde 
                        provident! Inventore dolore, recusandae optio ut necessitatibus facilis 
                        exercitationem rerum s.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Praesentium cumque exercitationem atque quis sapiente, nobis eligendi doloremque facilis. 
                    </p>
                </div>
            </div>
        </section>
    )
};

export default AboutMini;
