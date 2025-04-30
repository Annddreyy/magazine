export const getTotalReviews = (state) => {
    return state.reviews.totalReviewsCount;
};

export const getPageSize = (state) => {
    return state.reviews.pageSize;
};

export const getCurrentPage = (state) => {
    return state.reviews.currentPage;
};

export const getReviewsSelector = (state) => {
    return state.reviews.reviews;
};

export const getIsFetching = (state) => {
    return state.reviews.isFetching;
};
