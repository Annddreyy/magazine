import { NavLink } from 'react-router-dom';
import classes from './../Common.module.css';

function getLinks(links) {
    function getPartOfLinks(condition) {
        return links
        .filter(link => !!link.isRightLink == condition)
        .map(link => 
            <NavLink to={ link.link } className={ classes.link }>
                { link.text }
            </NavLink>
        );
    }
    return { leftLinks: getPartOfLinks(false), rightLinks: getPartOfLinks(true) }
}


export default getLinks;