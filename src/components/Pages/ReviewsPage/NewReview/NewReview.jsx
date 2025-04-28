import React, { useState } from 'react';
import Star from './../../../common/Star/Star';
import classes from './NewReview.module.css';
import personImg from './../../../../assets/images/person.jpg';

const NewReview = ({ img, fullname, addReview, isAuth, user }) => {
    let [grade, setGrade] = useState(1);

    const textArea = React.createRef();

    const addReviewHandler = (event) => {
        addReview(textArea.current.value, user);
        event.preventDefault();
    };

    const starSelect = (event) => {
        const target = event.target.closest('span');
        setGrade( +target.getAttribute('value') )
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        let isFill = grade >= i;
        stars.push(
            <span  key={ i } value={ i } onPointerOver={ starSelect }>
                <Star isFill={ isFill } />
            </span>
        )
    }

    return (
        <section className='container'>
            <div className={ classes.items }>
            { 
                isAuth
                ?
                <>
                    <h3 className={ classes.title }>Будем благодарны, если вы оставите отзыв</h3>
                    <form action="" className={ classes.form }>
                        <div className={ classes.mainItems }>
                            <div className={ classes.left }>
                                <img src={ personImg } className={ classes.img } alt="" />
                                <span>{ fullname }</span>
                            </div>
                            <div className={ classes.information }>
                                <textarea ref={ textArea } name="" id="" className={ classes.text }>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at 
                                    ipsum odit asperiores, consequatur quam accusantium molestiae deserunt amet 
                                    voluptatem rem a eaque eius ducimus consequuntur blanditiis fuga iusto dicta.
                                </textarea>
                                <div className={ classes.stars }>
                                    { stars }
                                </div>
                            </div>
                        </div>
                        <button className={ classes.button } onClick={ addReviewHandler }>Добавить отзыв</button>
                    </form>
                </>
                :
                <h3>Для того, чтобы оставить отзыв, необходимо авторизоваться</h3>
            }
            </div>
        </section>
    )
};

export default NewReview;