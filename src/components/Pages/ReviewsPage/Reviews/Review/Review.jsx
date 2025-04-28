import Star from '../../../../common/Star/Star';
import choosePhoto from '../../../../../utils/choosePhoto';
import classes from './Review.module.css';
import personImg from './../../../../../assets/images/person.jpg';
import { PERSON_DEFAULT_URL } from '../../../../../config/vars';

const Review = ({ img, user, grade, comment }) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        let isFill = i < grade;
        stars.push( <Star isFill={ isFill }/> );
    }

    const photo = choosePhoto(img, personImg, PERSON_DEFAULT_URL);
    
    return (
        <article className={ classes.review }>
            <div className={ classes.left }>
                <img src={ photo } alt="" />
                <span>{ user }</span>
            </div>
            <div className={ classes.information }>
                <p>{ comment }</p>
                <div>{ stars }</div>
            </div>
        </article>
    )
};

export default Review;