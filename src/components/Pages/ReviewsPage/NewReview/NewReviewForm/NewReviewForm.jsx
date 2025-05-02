import { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Star from './../../../../common/Star/Star';
import classes from './NewReviewForm.module.css';
import { Textarea } from '../../../../common/FormControls/FormControls';

const NewReviewForm = ({ photo, fullname, handleSubmit, onSubmit, error }) => {
    let [grade, setGrade] = useState(1);
    
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

    const addData = (formValues) => {
        onSubmit({ ...formValues, grade });
    };

    return (
        <>
            <h3 className={ classes.title }>Будем благодарны, если вы оставите отзыв</h3>
            <form action="" className={ classes.form } onSubmit={ handleSubmit(addData) }>
                <div className={ classes.mainItems }>
                    <div className={ classes.left }>
                        <img src={ photo } className={ classes.img } alt="" />
                        <span>{ fullname }</span>
                    </div>
                    <div className={ classes.information }>
                        <Field 
                            id='comment'
                            name='comment'
                            component={ Textarea }
                            className={ classes.text }
                        />
                        <div className={ classes.stars }>{ stars }</div>
                    </div>
                </div>
                <button className={ classes.button }>Добавить отзыв</button>
            </form>
        </>
    )
};

export default reduxForm({ form: 'comment' })(NewReviewForm);
