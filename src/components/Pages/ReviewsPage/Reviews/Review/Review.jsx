import Star from '../../../../common/Star/Star';
import personImg from './../../../../../assets/images/person.jpg';
import classes from './Review.module.css';

const Review = ({ img, fullname, comment, grade }) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        let isFill = i < grade;
        stars.push( <Star isFill={ isFill }/> );
    }
    return (
        <article className={ classes.review }>
            <div className={ classes.left }>
                <img src={ personImg } alt="" />
                <span>{ fullname }</span>
            </div>
            <div className={ classes.information }>
                <p>
                    { comment }
                </p>
                <div>
                    { stars }
                </div>
            </div>
        </article>
    )
};

export default Review;