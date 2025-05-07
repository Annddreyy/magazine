import { connect } from "react-redux";
import { categories, sortByCategories } from "../../../../config/sort";
import classes from './Sort.module.css';
import { setCategory, setSortBy } from "../../../../redux/favority/favorityReducer";

const Sort = ({ category, sortBy, setCategoryThunk, setSortBy }) => {
    debugger;
    const categories = category.map(c => <option value={ c.value } key={ c.id }></option>);
    const sortByCategories = sortBy.map(s => <option value={ s.value } key={ s.id }></option>);

    const onCategoryChange = (event) => {
        debugger;
        setCategoryThunk(event.target.value);
        debugger;
    }

    const onSortByChange = (event) => {
        setSortBy(event.target.value);
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

export default connect(mapStateToProps, { setCategory, setSortBy })(Sort);