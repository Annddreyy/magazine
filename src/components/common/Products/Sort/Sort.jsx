import { connect } from "react-redux";
import { categories, sortByCategories } from "../../../../config/sort";
import classes from './Sort.module.css';

const Sort = ({ category, sortBy }) => {
    debugger;
    const categories = category.map(c => <option value={ c.value }></option>);
    const sortByCategories = sortBy.map(s => <option value={ s.value }></option>);

    return (
        <div className={ classes.sortSection }>
            <div>
                <span>Категория: </span>
                <input type='text' list='category' className={ classes.select } />
                <datalist id="category">
                    { categories }
                </datalist>
            </div>
            <div>
                <span>Сортировать по: </span>
                <input type="text" list='sortBy' className={ classes.select } />
                <datalist id='sortBy'>
                    { sortByCategories }
                </datalist>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        category: categories,
        sortBy: sortByCategories
    }
};

export default connect(mapStateToProps)(Sort);