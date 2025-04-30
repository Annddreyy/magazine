import classes from './Paginator.module.css';

const Paginator = ({ currentPage, totalItemsCount, pageSize, setCurrentPage }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const setPage = (event) => setCurrentPage( +event.target.innerHTML );
    const setPreviosPage = () => currentPage > 1 && setCurrentPage( currentPage - 1 );
    const setNextPage = () => currentPage < pagesCount && setCurrentPage( currentPage + 1 );

    const pagesElem = pages.map(page => <span onClick={ setPage } className={ page === currentPage ? classes.activePage : '' } key={ page }>{ page }</span>)
    
    return (
        <div className='container'>
            {
                pageSize > 0
                &&
                <div className={ classes.paginator }>
                    <button onClick={ setPreviosPage }>&lt;</button>
                    <div className={ classes.pages }>
                        { pagesElem }
                    </div>
                    <button onClick={ setNextPage }>&gt;</button>
                </div>
            }
        </div>
    )
};

export default Paginator;