import classes from './Paginator.module.css';

const Paginator = ({ currentPage, totalItemsCount, pageSize, setCurrentPage }) => {
    const setPage = (event) => {
        console.log( +event.target.innerHTML );
    };

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(<span onClick={ setPage }>{ i }</span>);
    }

    return (
        <div className='container'>
            <div className={ classes.paginator }>
                <button>&lt;</button>
                <div className={ classes.pages }>
                    { pages }
                </div>
                <button>&gt;</button>
            </div>
        </div>
    )
};

export default Paginator;