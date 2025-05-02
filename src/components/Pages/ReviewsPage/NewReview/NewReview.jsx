import React from 'react';
import choosePhoto from '../../../../utils/choosePhoto';
import generateFullName from '../../../../utils/generateFullName';
import classes from './NewReview.module.css';
import { personDefault } from '../../../../config/images';
import { PERSON_DEFAULT_URL } from '../../../../config/vars';
import NewReviewForm from './NewReviewForm/NewReviewForm';

const NewReview = ({ addReview, isAuth, getReviews, currentPage, pageSize, ...user }) => {
    const photo = choosePhoto(user.img, personDefault, PERSON_DEFAULT_URL);
    const fullname = isAuth && generateFullName(user.surname, user.name, user.patronymic);

    const onSubmit = async(formData) => {
        let { comment, grade } = { ...formData };
        await addReview(user.id, comment, grade);
        getReviews(currentPage, pageSize)
    };

    return (
        <section className='container'>
            <div className={ classes.items }>
            { 
                isAuth
                ?
                <NewReviewForm 
                    fullname={ fullname }
                    photo={ photo }
                    onSubmit={ onSubmit }
                />
                :
                <h3>Для того, чтобы оставить отзыв, необходимо авторизоваться</h3>
            }
            </div>
        </section>
    )
};

export default NewReview;