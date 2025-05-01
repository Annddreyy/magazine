import Paginator from '../components/common/Paginator/Paginator';

const withPaginator = (Component) => {
    return function wrappedFunction(props) {
        let { totalItemsCount, currentPage, pageSize, setCurrentPage, ...componentProps } = {...props};
        return (
            <>
                <Component { ...componentProps } currentPage={ currentPage } pageSize={ pageSize } />
                <Paginator 
                    totalItemsCount={ totalItemsCount }
                    currentPage={ currentPage }
                    pageSize={ pageSize }
                    setCurrentPage={ setCurrentPage }
                />
            </>
        )
    }
};

export default withPaginator;