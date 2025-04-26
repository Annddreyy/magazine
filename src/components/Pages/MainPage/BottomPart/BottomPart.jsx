import bottomPartImg from './../../../../assets/images/cream.png';
import classes from './BottomPart.module.css';

const BottomPart = () => {
    return (
        <section>
            <div className='container'>
                <div className={ classes.items }>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium cumque 
                        exercitationem atque quis sapiente, nobis eligendi doloremque facilis. 
                        Architecto iure quas eius et accusantium maxime aut velit pariatur at. Placeat 
                        corrupti unde provident! Inventore dolore, recusandae optio ut necessitatibus 
                        facilis exercitationem rerum s.  Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Praesentium cumque exercitationem atque quis sapiente, 
                        nobis eligendi doloremque facilis.
                    </p>
                    <img src={ bottomPartImg } alt="" />
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium cumque 
                    exercitationem atque quis sapiente, nobis eligendi doloremque facilis. Architecto iure 
                    quas eius et accusantium maxime aut velit pariatur at. Placeat corrupti unde provident! 
                    Inventore dolore, recusandae optio ut necessitatibus facilis exercitationem rerum s. 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium cumque 
                    exercitationem atque quis sapiente, nobis eligendi doloremque facilis. 
                </p>
            </div>
        </section>
    )
};

export default BottomPart;