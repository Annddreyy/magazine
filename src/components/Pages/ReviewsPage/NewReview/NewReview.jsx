import React from 'react';

import personImg from './../../../../assets/images/person.jpg';
import classes from './NewReview.module.css';

const NewReview = ({ img, fullname = 'Иванов И. И.', addReview }) => {
    const textArea = React.createRef();

    const addReviewHandler = (event) => {
        addReview(textArea.current.value);
        event.preventDefault();
    };

    return (
        <section className='container'>
            <div className={ classes.items }>
                <h3 className={ classes.title }>Будем благодарны, если вы оставите отзыв</h3>
                <form action="" className={ classes.form }>
                    <div className={ classes.mainItems }>
                        <div className={ classes.left }>
                            <img src={ personImg } className={ classes.img } alt="" />
                            <span>{ fullname }</span>
                        </div>
                        <textarea ref={ textArea } name="" id="" className={ classes.text }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at 
                            ipsum odit asperiores, consequatur quam accusantium molestiae deserunt amet 
                            voluptatem rem a eaque eius ducimus consequuntur blanditiis fuga iusto dicta.
                        </textarea>
                    </div>
                    <button className={ classes.button } onClick={ addReviewHandler }>Добавить отзыв</button>
                </form>
            </div>
        </section>
    )
};

export default NewReview;