import Loading from '../components/common/Loading/Loading';

const withLoader = (Component) => {
    return (props) => {
        if (props.isFetching) {
            return <Loading />;
        }
        return <Component {...props} />;
    }
};

export default withLoader;
