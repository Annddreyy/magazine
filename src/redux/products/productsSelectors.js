export const getProductsSelector = (state) => {
    return state.products.products;
};

export const getTotalProductsCount = (state) => {
    return state.products.totalProductsCount;
};

export const getPageSize = (state) => {
    return state.products.pageSize;
};

export const getCurrentPage = (state) => {
    return state.products.currentPage;
};

export const getProductSelector = (state) => {
    return state.products.product;
};

export const getIsFetching = (state) => {
    return state.products.isFetching;
};
