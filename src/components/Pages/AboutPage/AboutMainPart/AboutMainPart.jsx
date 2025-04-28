import classes from './AboutMainPart.module.css';
import product1 from './../../../../assets/images/AboutPage/product1.jpg';
import product2 from './../../../../assets/images/AboutPage/product2.jpg';

const AboutMainPart = () => {
    return (
        <div className='container'>
            <h2>О нас</h2>
            <div className={ classes.column }>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos odit 
                    possimus harum illo doloribus consequuntur minus modi. Fugiat similique iure 
                    consectetur nam reiciendis repellat esse. Vel explicabo debitis atque ipsum 
                    commodi voluptates voluptatum quam itaque est vitae accusamus iure dolor 
                    deleniti, laudantium ad illum dignissimos molestiae labore quasi architecto 
                    placeat dolorem impedit quis corporis. Quam placeat, soluta distinctio a, sint 
                    ratione eius fuga eaque tempora excepturi iste consequatur magnam?
                </p>
                <div className={ classes.row }>
                    <div className={ classes.column }>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                            quas nesciunt temporibus, amet repellendus atque quis quibusdam nam nobis
                            perspiciatis soluta, facilis aliquam. Corporis ipsa, quae iure odio 
                            laborum accusantium!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, 
                            assumenda eum eaque commodi atque obcaecati, maiores impedit sint, eius 
                            necessitatibus voluptas voluptate? Numquam voluptatum quidem vero hic 
                            quod porro ipsa.
                        </p>
                    </div>
                    <img src={ product1 } className={ classes.img } alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos odit 
                    possimus harum illo doloribus consequuntur minus modi. Fugiat similique iure 
                    consectetur nam reiciendis repellat esse. Vel explicabo debitis atque ipsum 
                    commodi voluptates voluptatum quam itaque est vitae accusamus iure dolor 
                    deleniti, laudantium ad illum dignissimos molestiae labore quasi architecto 
                    placeat dolorem impedit quis corporis. 
                </p>
                <div className={ classes.row }>
                    <img src={ product2 } className={ classes.img } alt="" />
                    <div className={ classes.column }>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                            quas nesciunt temporibus, amet repellendus atque quis quibusdam nam nobis
                            perspiciatis soluta, facilis aliquam. Corporis ipsa, quae iure odio 
                            laborum accusantium!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, 
                            assumenda eum eaque commodi atque obcaecati, maiores impedit sint, eius 
                            necessitatibus voluptas voluptate? Numquam voluptatum quidem vero hic 
                            quod porro ipsa.
                        </p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum sint est 
                    officiis praesentium inventore voluptatibus. Consequatur explicabo, distinctio 
                    harum, eos sunt recusandae provident quasi numquam excepturi, quibusdam odio? Dolore?
                </p>
            </div>
        </div>
    )
};

export default AboutMainPart;
