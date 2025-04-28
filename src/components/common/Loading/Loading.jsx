import loading from './../../../assets/images/loading.gif';
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={ classes.loading }>
            <img src={ loading } fetchPriority='high' />
        </div>
    )
};

export default Loading;
