import classes from './Loading.module.css';
import { loading } from './../../../config/images';

const Loading = () => {
    return (
        <div className={ classes.loading }>
            <img src={ loading } fetchPriority='high' alt="" />
        </div>
    )
};

export default Loading;
