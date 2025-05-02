export const getFavority = (state) => {
    return state.favority.favority;
};

export const getTotalFavorityCount = (state) => {
    return state.favority.totalFavorityCount;
};

export const getPageSize = (state) => {
    return state.favority.pageSize;
};

export const getCurrentPage = (state) => {
    return state.favority.currentPage;
};

export const getIsFetching = (state) => {
    return state.favority.isFetching;
};
