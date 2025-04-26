import personImg from './../../../../assets/images/person.jpg';
import classes from './NewReview.module.css';

const NewReview = ({ img, fullname = 'Иванов И. И.'}) => {
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
                        <textarea name="" id="" className={ classes.text }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at 
                            ipsum odit asperiores, consequatur quam accusantium molestiae deserunt amet 
                            voluptatem rem a eaque eius ducimus consequuntur blanditiis fuga iusto dicta.
                        </textarea>
                    </div>
                    <button className={ classes.button }>Добавить отзыв</button>
                </form>
            </div>
        </section>
    )
};

export default NewReview;