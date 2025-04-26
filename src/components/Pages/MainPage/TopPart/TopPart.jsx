import classes from './TopPart.module.css';

const TopPart = () => {
    return (
        <section className={ classes.topPart }>
            <div className={ classes.item + ' ' + 'container' }>
                <p className={ classes.text }>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit deleniti ipsum, enim, 
                    veniam numquam odio eos laboriosam, officia consequatur hic debitis nostrum autem esse 
                    libero quidem earum cum rerum.
                </p>
            </div>
        </section>
    )
}

export default TopPart;