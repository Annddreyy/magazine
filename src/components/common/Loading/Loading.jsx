import classes from './Loading.module.css';
import loading from './../../../assets/images/loading.gif';

const Loading = () => {
    return (
        <div className={ classes.loading }>
            <img src={ loading } fetchPriority='high' alt="" />
        </div>
    )
};

export default Loading;
