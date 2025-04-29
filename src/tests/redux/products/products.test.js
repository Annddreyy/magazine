import productsReducer, { setCurrentPage, setIsFecthing } from "../../../redux/products/productsReducer";

const state = {
    totalProductsCount: 0,
    pageSize: 12,
    currentPage: 1,

    products: [],
    favorityProducts: [],
    
    product: null,

    isFetching: false
};

describe('check products reducer', () => {
    it('set isFetching false', () => {
        const action = setIsFecthing(false);
        const newState = productsReducer(state, action);
        expect(newState.isFetching).toBe(false);
    });
    it('set isFetching true', () => {
        const action = setIsFecthing(true);
        const newState = productsReducer(state, action);
        expect(newState.isFetching).toBe(true);
    });
    it('set current page 5 ', () => {
        const action = setCurrentPage(5);
        const newState = productsReducer(state, action);
        expect(newState.currentPage).toBe(5);
    });
});
