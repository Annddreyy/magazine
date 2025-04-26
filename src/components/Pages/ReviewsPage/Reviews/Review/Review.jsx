import personImg from './../../../../../assets/images/person.jpg';
import classes from './Review.module.css';

const Review = ({ userImg, fullname, text }) => {
    return (
        <article className={ classes.review }>
            <div className={ classes.left }>
                <img src={ userImg || personImg } alt="" />
                <span>{ fullname }</span>
            </div>
            <p>
                { text }
            </p>
        </article>
    )
};

export default Review;