import { connect, useDispatch } from "react-redux";
import { categories, sortByCategories } from "../../../../config/sort";
import classes from './Sort.module.css';

const Sort = ({ category, sortBy, setCategory, setSortBy }) => {
    const categories = category.map(c => <option value={ c.value } key={ c.id }></option>);
    const sortByCategories = sortBy.map(s => <option value={ s.value } key={ s.id }></option>);

    const dispatch = useDispatch();

    const onCategoryChange = (event) => {
        dispatch(setCategory(event.target.value));
    }

    const onSortByChange = (event) => {
        dispatch(setSortBy(event.target.value));
    }

    return (
        <div className={ classes.sortSection }>
            <div>
                <span>Категория: </span>
                <input type='text' list='category' className={ classes.select } onChange={ onCategoryChange } />
                <datalist id="category">
                    { categories }
                </datalist>
            </div>
            <div>
                <span>Сортировать по: </span>
                <input type="text" list='sortBy' className={ classes.select } onChange={ onSortByChange } />
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