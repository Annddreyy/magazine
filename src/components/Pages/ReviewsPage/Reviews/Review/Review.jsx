import choosePhoto from '../../../../../utils/choosePhoto';
import classes from './Review.module.css';
import personImg from './../../../../../assets/images/person.jpg';
import { PERSON_DEFAULT_URL } from '../../../../../config/vars';
import createStars from '../../../../../utils/createStars';

const Review = ({ img, fullname, grade, comment }) => {
    let stars = createStars(grade);
    const photo = choosePhoto(img, personImg, PERSON_DEFAULT_URL);
    
    return (
        <article className={ classes.review }>
            <div className={ classes.left }>
                <img src={ photo } alt="" />
                <span>{ fullname }</span>
            </div>
            <div className={ classes.information }>
                <p className={ classes.comment }>{ comment }</p>
                <div>{ stars }</div>
            </div>
        </article>
    )
};

export default Review;