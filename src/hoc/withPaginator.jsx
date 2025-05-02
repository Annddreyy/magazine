import Paginator from '../components/common/Paginator/Paginator';

const withPaginator = (Component) => {
    return ({ totalItemsCount, currentPage, pageSize, setCurrentPage, ...componentProps }) => {
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