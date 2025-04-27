const Paginator = ({ totalItemsCount = 100, pageSize = 12, pagesPartSize = 10 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>  
            { pages } 
        </div>
    )
};

export default Paginator;