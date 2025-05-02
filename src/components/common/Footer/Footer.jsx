import getLinks from '../../../utils/getLinks';
import classes from './Footer.module.css';
import { logo } from '../../../config/images';

const Footer = ({ links }) => {
    let { leftLinks, rightLinks } = {...getLinks(links)};
    return (
        <footer className={ classes.footer }>
            <div className='container'>
                <div className={ classes.topPart }>
                    <div className={ classes.links }>
                        <div className={ classes.items }>
                            { leftLinks }
                        </div>
                        <div className={ classes.right }>
                            <div className={ classes.items }>
                                { rightLinks }
                            </div>
                            <img src={ logo } className={ classes.logo } alt="Логотип" />
                        </div>
                    </div>
                </div>
                <p className={ classes.copyright }>© 2025 - Emilia, все права защищены</p>
            </div>
        </footer>
    )
};

export default Footer;