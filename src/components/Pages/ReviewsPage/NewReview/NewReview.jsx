import React, { useState } from 'react';
import Star from './../../../common/Star/Star';
import choosePhoto from '../../../../utils/choosePhoto';
import generateFullName from '../../../../utils/generateFullName';
import classes from './NewReview.module.css';
import { personDefault } from '../../../../config/images';
import { PERSON_DEFAULT_URL } from '../../../../config/vars';

const NewReview = ({ addReview, isAuth, ...user }) => {
    let [grade, setGrade] = useState(1);
    const textArea = React.createRef();
    
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
    
    const photo = choosePhoto(user.img, personDefault, PERSON_DEFAULT_URL);
    const fullname = isAuth && generateFullName(user.surname, user.name, user.patronymic);
    
    const addReviewHandler = (event) => {
        let comment = textArea.current.value;
        addReview(user.id, fullname, user.img, comment, grade);
        event.preventDefault();
    };

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
                                <img src={ photo } className={ classes.img } alt="" />
                                <span>{ fullname }</span>
                            </div>
                            <div className={ classes.information }>
                                <textarea ref={ textArea } name="" id="" className={ classes.text }>
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